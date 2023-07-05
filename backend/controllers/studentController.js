const Student = require("../models/student");

// Get all Students
exports.getStudents = async (req, res) => {
  try {
    const { email } = req.query;
    let students;

    if (email) {
      students = await Student.find({ email });
    } else {
      students = await Student.find();
    }

    res.json(students);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
// Create Student
exports.createStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
// Update Student
exports.updateStudent = async (req, res) => {
  try {
    const student = await Student.findOneAndUpdate(
      { email: req.query.email },
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
    const student = await Student.findOne({ email: req.query.email });

    const workIndex = student.workingExperience.findIndex(
      (work) => work._id.toString() === req.query.id
    );
    console.log(workIndex);
    if (workIndex !== -1) {
      student.workingExperience.splice(workIndex, 1);
      await student.save();
    }

    const projectIndex = student.projects.findIndex(
      (project) => project._id.toString() === req.query.id
    );
    if (projectIndex !== -1) {
      student.projects.splice(projectIndex, 1);
      await student.save();
    }

    const paperIndex = student.researchPapers.findIndex(
      (paper) => paper._id.toString() === req.query.id
    );
    if (paperIndex !== -1) {
      student.researchPapers.splice(paperIndex, 1);
      await student.save();
    }

    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
