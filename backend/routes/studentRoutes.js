const express = require("express");
const studentController = require("../controllers/studentController");

const router = express.Router();

router.post("/", studentController.createStudent);
router.get("/student/", studentController.getStudents);
router.get("/student/:id", studentController.getStudent);
router.get("/projects", studentController.getStudentProjects);
router.get("/papers", studentController.getStudentPapers);
router.put("/:id/add", studentController.updateStudentAdd);
router.put("/:id/replace", studentController.updateStudentReplace);
router.delete("/:id", studentController.deleteStudent);

module.exports = router;
