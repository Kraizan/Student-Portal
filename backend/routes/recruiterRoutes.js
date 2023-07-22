const express = require("express");
const router = express.Router();
const recruiterController = require("../controllers/recruiterController");

router.get("/", recruiterController.getAllRecruiters);
router.post("/", recruiterController.createRecruiter);
router.get("/:id", recruiterController.getRecruiter);
router.put("/:id", recruiterController.updateRecruiter);
router.delete("/:id", recruiterController.deleteRecruiter);
router.post("/:id/jobPostings", recruiterController.createJobPosting);
router.put("/:id/jobPostings/:jobId", recruiterController.updateJobPosting);
router.delete("/:id/jobPostings/:jobId", recruiterController.deleteJobPosting);

module.exports = router;
