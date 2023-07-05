const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  contact: String,
  profileImage: String,
  resume: String,
  hyperlinks: {
    portfolioWebsite: String,
    linkedIn: String,
    github: String,
    other: [String],
  },
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
