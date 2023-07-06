const express = require("express");
const studentController = require("../controllers/studentController");

const router = express.Router();

router.post("/", studentController.createStudent);
router.get("/:id?", studentController.getStudents);
router.put("/:id", studentController.updateStudent);
router.delete("/:id", studentController.deleteStudent);

module.exports = router;
