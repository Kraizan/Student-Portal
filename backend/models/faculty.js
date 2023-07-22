const mongoose = require("mongoose");

const facultySchema = new mongoose.Schema({
  _id: {
    type: String,
  },
  fullName: {
    type: String,
  },
  currentInstitution: {
    type: String,
  },
  email: {
    type: String,
  },
  contact: {
    type: String,
  },
  linkedIn: String,
  profileImage: String,
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
      description: String,
      startedOn: String,
      techStack: [String],
      link: String,
      applications: [
        {
          type: mongoose.Schema.Types.ObjectId,
        },
      ],
    },
  ],
  researchPapers: [
    {
      title: String,
      publisher: String,
      publishedOn: String,
      abstract: String,
      link: String,
      applications: [
        {
          type: mongoose.Schema.Types.ObjectId,
        },
      ],
    },
  ],
});

module.exports = mongoose.model("Faculty", facultySchema);
