import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import axios from "axios";
import AddWorkButton from "./add_work_button";

const ProjectForm = ({ setData }) => {
  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    title: "",
    link: "",
    startedOn: "",
    description: "",
    techStack: [],
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevformValues) => ({
      ...prevformValues,
      [name]: name === "techStack" ? value.split(",") : value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const email = localStorage.getItem("user");
      await axios
        .put(`http://localhost:8000/api/students?email=${email}`, {
          projects: formValues,
        })
        .then((res) => {
          console.log(res.data);
          setData(res.data);
        });
      console.log(formValues);

      // Reset form values
      setFormValues({
        title: "",
        link: "",
        startedOn: "",
        description: "",
        techStack: [],
      });

      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <AddWorkButton onClick={handleOpen} />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Project</DialogTitle>
        <DialogContent>
          <TextField
            label="Title"
            name="title"
            value={formValues.title}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Link"
            name="link"
            value={formValues.link}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Started On"
            name="startedOn"
            value={formValues.startedOn}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            name="description"
            value={formValues.description}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Tech Stack"
            name="techStack"
            value={formValues.techStack}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Button onClick={handleClose} variant="contained" color="error">
            Cancel
          </Button>
          <Button onClick={handleSubmit} variant="contained" color="success">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProjectForm;
