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
      from: Date,
      to: Date,
      position: String,
      description: String,
    },
  ],
  projects: [
    {
      title: String,
      link: String,
      startedOn: Date,
      description: String,
      techStack: [String],
    },
  ],
  researchPapers: [
    {
      title: String,
      publisher: String,
      publishedOn: Date,
      abstract: String,
      docLink: String,
    },
  ],
});

module.exports = mongoose.model("Student", studentSchema);
