const mongoose = require("mongoose");
const recruiterSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  company: {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    logo: String,
  },
  jobPostings: [
    {
      _id: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      stipend: Number,
      applyLink: {
        type: String,
        required: true,
      },
      applications: [
        {
          type: mongoose.Schema.Types.ObjectId,
        },
      ],
    },
  ],
});
module.exports = mongoose.model("Recruiter", recruiterSchema);
