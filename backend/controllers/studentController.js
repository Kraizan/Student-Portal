const Student = require("../models/student");

// Get all Students
exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
// Get a specific student
exports.getStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res
        .status(404)
        .json({ success: false, error: "Student not found" });
    }
    res.status(200).json(student);
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// Get all students projects
exports.getStudentProjects = async (req, res) => {
  try {
    const students = await Student.find();
    const projects = [];
    for (var i = 0; i < students.length; i++) {
      for (var j = 0; j < students[i].projects.length; j++) {
        projects.push(students[i].projects[j]);
      }
    }
    res.status(200).json(projects);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
// Get all students papers
exports.getStudentPapers = async (req, res) => {
  try {
    const students = await Student.find();
    const researchPapers = [];
    for (var i = 0; i < students.length; i++) {
      for (var j = 0; j < students[i].researchPapers.length; j++) {
        researchPapers.push(students[i].researchPapers[j]);
      }
    }
    res.status(200).json(researchPapers);
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
      portfolioWebsite,
      linkedIn,
      github,
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
      portfolioWebsite: portfolioWebsite || "",
      linkedIn: linkedIn || "",
      github: github || "",
      hyperlinks: hyperlinks || [],
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
exports.updateStudentAdd = async (req, res) => {
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
exports.updateStudentReplace = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
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
    const workId = req.query.workId;

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

    const linkIndex = student.hyperlinks.findIndex(
      (link) => link._id.toString() === workId
    );
    if (linkIndex !== -1) {
      student.hyperlinks.splice(linkIndex, 1);
      await student.save();
    }

    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
