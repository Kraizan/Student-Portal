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
    res.json(student);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
// Delete Student
exports.deleteStudent = async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Student deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
