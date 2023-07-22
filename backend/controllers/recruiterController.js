const Recruiter = require("../models/Recruiter");

// Get all recruiters
exports.getAllRecruiters = async (req, res) => {
  try {
    const recruiters = await Recruiter.find();
    res.json(recruiters);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// Create a new recruiter
exports.createRecruiter = async (req, res) => {
  try {
    const recruiterData = {
      _id: req.body._id || "",
      name: req.body.name || "",
      email: req.body.email || "",
      contact: req.body.contact || "",
      company: {
        name: req.body.company?.name || "",
        email: req.body.company?.email || "",
        logo: req.body.company?.logo || "",
      },
      jobPostings: req.body.jobPostings || [],
    };
    const recruiter = await Recruiter.create(recruiterData);
    res.status(201).json(recruiter);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
// Get a recruiter by ID
exports.getRecruiter = async (req, res) => {
  try {
    const recruiter = await Recruiter.findById(req.params.id);
    res.json(recruiter);
  } catch (err) {
    res.status(404).json({ message: "Recruiter not found" });
  }
};
// Update a recruiter by ID
exports.updateRecruiter = async (req, res) => {
  try {
    const recruiter = await Recruiter.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.json(recruiter);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
// Delete a recruiter by ID
exports.deleteRecruiter = async (req, res) => {
  try {
    const recruiter = await Recruiter.findByIdAndDelete(req.params.id);
    if (recruiter) {
      res.json({ message: "Recruiter deleted" });
    } else {
      res.status(404).json({ message: "Recruiter not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Create a job posting for a recruiter
exports.createJobPosting = async (req, res) => {
  try {
    const jobPosting = {
      _id: req.body._id || "",
      title: req.body.title || "",
      description: req.body.description || "",
      stipend: req.body.stipend || 0,
      applyLink: req.body.applyLink || "",
      applications: [],
    };
    const recruiter = await Recruiter.findById(req.params.id);
    recruiter.jobPostings.push(jobPosting);
    await recruiter.save();
    res.status(201).json(jobPosting);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
// Update a job posting for a recruiter
exports.updateJobPosting = async (req, res) => {
  try {
    const recruiter = await Recruiter.findOneAndUpdate(
      { _id: req.params.id, "jobPostings._id": req.params.jobId },
      { $set: req.body },
      { new: true }
    );
    res.json(recruiter.jobPostings);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a job posting for a recruiter
exports.deleteJobPosting = async (req, res) => {
  try {
    const recruiter = await Recruiter.findById(req.params.id);
    if (recruiter) {
      const jobIndex = recruiter.jobPostings.findIndex(
        (job) => job._id === req.params.jobId
      );
      if (jobIndex !== -1) {
        recruiter.jobPostings.splice(jobIndex, 1);
        await recruiter.save();
        res.json({ message: "Job posting deleted" });
      } else {
        res.status(404).json({ message: "Job posting not found" });
      }
    } else {
      res.status(404).json({ message: "Recruiter not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
