const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");
// Create Student
router.post("/", studentController.createStudent);
// Get Student
router.get("/:id", studentController.getStudent);
// Update Student
router.put("/:id", studentController.updateStudent);
// Delete Student
router.delete("/:id", studentController.deleteStudent);
module.exports = router;
