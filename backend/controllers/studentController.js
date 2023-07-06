const Student = require("../models/student");

// Get all Students
exports.getStudents = async (req, res) => {
  try {
    if (req.params.id) {
      const student = await Student.findById(req.params.id);
      if (!student) {
        return res.status(404).json({ message: "Student not found" });
      }
      res.json(student);
    } else {
      // If no ID is provided, retrieve all students
      const students = await Student.find();
      res.json(students);
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
// Create Student
exports.createStudent = async (req, res) => {
  try {
    const {
      _id,
      fullName,
      email,
      contact,
      profileImage,
      resume,
      hyperlinks,
      workingExperience,
      projects,
      researchPapers,
    } = req.body;

    const student = new Student({
      _id: _id || "",
      fullName: fullName || "",
      email: email || "",
      contact: contact || "",
      profileImage: profileImage || "",
      resume: resume || "",
      hyperlinks: hyperlinks || {
        portfolioWebsite: "",
        linkedIn: "",
        github: "",
        other: [],
      },
      workingExperience: workingExperience || [],
      projects: projects || [],
      researchPapers: researchPapers || [],
    });

    const newStudent = await student.save();
    res.status(201).json(newStudent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
// Update Student
exports.updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      { $push: req.body },
      {
        new: true,
        omitUndefined: true,
      }
    );
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
// Delete Student
exports.deleteStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    const link = req.query.link;
    const workId = req.query.workId;

    if (link) {
      const index = student.hyperlinks.other.findIndex(
        (hyperlink) => hyperlink.toString() === link
      );

      if (index !== -1) {
        student.hyperlinks.other.splice(index, 1);
        await student.save();
      }
    } else {
      const workIndex = student.workingExperience.findIndex(
        (work) => work._id.toString() === workId
      );

      if (workIndex !== -1) {
        student.workingExperience.splice(workIndex, 1);
        await student.save();
      }

      const projectIndex = student.projects.findIndex(
        (project) => project._id.toString() === workId
      );
      if (projectIndex !== -1) {
        student.projects.splice(projectIndex, 1);
        await student.save();
      }

      const paperIndex = student.researchPapers.findIndex(
        (paper) => paper._id.toString() === workId
      );
      if (paperIndex !== -1) {
        student.researchPapers.splice(paperIndex, 1);
        await student.save();
      }
    }

    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
