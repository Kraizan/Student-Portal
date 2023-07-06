const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  _id: String,
  fullName: String,
  email: String,
  contact: String,
  profileImage: String,
  resume: String,
  portfolioWebsite: String,
  linkedIn: String,
  github: String,
  hyperlinks: [
    {
      title: String,
      link: String,
    },
  ],
  workingExperience: [
    {
      company: String,
      from: String,
      to: String,
      position: String,
      description: String,
    },
  ],
  projects: [
    {
      title: String,
      link: String,
      startedOn: String,
      description: String,
      techStack: [String],
    },
  ],
  researchPapers: [
    {
      title: String,
      publisher: String,
      publishedOn: String,
      abstract: String,
      link: String,
    },
  ],
});

module.exports = mongoose.model("Student", studentSchema);
