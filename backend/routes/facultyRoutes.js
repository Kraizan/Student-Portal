const express = require("express");
const facultyController = require("../controllers/facultyController");

const router = express.Router();

router.post("/", facultyController.createFaculty);
router.get("/faculty", facultyController.getAllFaculties);
router.get("/faculty/:id", facultyController.getFaculty);
router.get("/projects", facultyController.getFacultyProjects);
router.get("/papers", facultyController.getFacultyPapers);
router.put("/:id/add", facultyController.updateFacultyAdd);
router.put("/:id/replace", facultyController.updateFacultyReplace);
router.delete("/:id", facultyController.deleteFaculty);

module.exports = router;
