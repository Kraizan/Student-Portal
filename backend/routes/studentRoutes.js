const express = require("express");
const studentController = require("../controllers/studentController");

const router = express.Router();

router.post("/", studentController.createStudent);
router.get("/:id?", studentController.getStudents);
router.put("/:id/add", studentController.updateStudentAdd);
router.put("/:id/replace", studentController.updateStudentReplace);
router.delete("/:id", studentController.deleteStudent);

module.exports = router;
