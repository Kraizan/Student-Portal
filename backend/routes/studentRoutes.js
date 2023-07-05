const express = require("express");
const studentController = require("../controllers/studentController");

const router = express.Router();

router.get("/", studentController.getStudents);
router.post("/", studentController.createStudent);
router.put("/", studentController.updateStudent);
router.delete("/:id", studentController.deleteStudent);

module.exports = router;
