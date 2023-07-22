const Faculty = require("../models/faculty");

// Get all faculties
exports.getAllFaculties = async (req, res) => {
  try {
    const faculties = await Faculty.find();
    res.json(faculties);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// Get a specific faculty
exports.getFaculty = async (req, res) => {
  try {
    const faculty = await Faculty.findById(req.params.id);
    if (!faculty) {
      return res
        .status(404)
        .json({ success: false, error: "Faculty not found" });
    }
    res.status(200).json(faculty);
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// Get all faculty projects
exports.getFacultyProjects = async (req, res) => {
  try {
    const faculties = await Faculty.find();
    const projects = [];
    for (var i = 0; i < faculties.length; i++) {
      for (var j = 0; j < faculties[i].projects.length; j++) {
        projects.push(faculties[i].projects[j]);
      }
    }
    res.status(200).json(projects);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
// Get all faculty papers
exports.getFacultyPapers = async (req, res) => {
  try {
    const faculties = await Faculty.find();
    const researchPapers = [];
    for (var i = 0; i < faculties.length; i++) {
      for (var j = 0; j < faculties[i].researchPapers.length; j++) {
        researchPapers.push(faculties[i].researchPapers[j]);
      }
    }
    res.status(200).json(researchPapers);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Create a new faculty
exports.createFaculty = async (req, res) => {
  try {
    const {
      _id,
      fullName,
      currentInstitution,
      email,
      contact,
      profileImage,
      hyperlinks,
      projects,
      researchPapers,
    } = req.body;

    const faculty = await Faculty.create({
      _id: _id || "",
      fullName: fullName || "",
      currentInstitution: currentInstitution || "",
      email: email || "",
      contact: contact || "",
      profileImage: profileImage || "",
      hyperlinks: hyperlinks || [],
      projects: projects || [],
      researchPapers: researchPapers || [],
    });

    await faculty.save();
    res.status(201).json(faculty);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a specific faculty
exports.updateFacultyAdd = async (req, res) => {
  try {
    const faculty = await Faculty.findByIdAndUpdate(
      req.params.id,
      { $push: req.body },
      {
        new: true,
        omitUndefined: true,
      }
    );
    res.status(201).json(faculty);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
exports.updateFacultyReplace = async (req, res) => {
  try {
    const faculty = await Faculty.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      {
        new: true,
        omitUndefined: true,
      }
    );
    if (!faculty) {
      return res
        .status(404)
        .json({ success: false, error: "Faculty not found" });
    }
    res.status(200).json(faculty);
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};
// Delete faculty details/work
exports.deleteFaculty = async (req, res) => {
  try {
    const faculty = await Faculty.findById(req.params.id);
    const workId = req.query.workId;

    const workIndex = faculty.workingExperience.findIndex(
      (work) => work._id.toString() === workId
    );

    if (workIndex !== -1) {
      faculty.workingExperience.splice(workIndex, 1);
      await faculty.save();
    }

    const projectIndex = faculty.projects.findIndex(
      (project) => project._id.toString() === workId
    );
    if (projectIndex !== -1) {
      faculty.projects.splice(projectIndex, 1);
      await faculty.save();
    }

    const paperIndex = faculty.researchPapers.findIndex(
      (paper) => paper._id.toString() === workId
    );
    if (paperIndex !== -1) {
      faculty.researchPapers.splice(paperIndex, 1);
      await faculty.save();
    }

    const linkIndex = faculty.hyperlinks.findIndex(
      (link) => link._id.toString() === workId
    );
    if (linkIndex !== -1) {
      faculty.hyperlinks.splice(linkIndex, 1);
      await faculty.save();
    }

    res.status(201).json(faculty);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
