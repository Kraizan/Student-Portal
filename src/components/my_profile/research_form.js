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

const ResearchForm = () => {
  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    title: "",
    publisher: "",
    publishedOn: "",
    link: "",
    abstract: "",
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const email = localStorage.getItem("user");
      if (formValues.to === "") {
        formValues.to = "present";
      }
      await axios.put(`http://localhost:8000/api/students?email=${email}`, {
        researchPapers: formValues,
      });
      console.log(formValues);

      // Reset form values
      setFormValues({
        title: "",
        publisher: "",
        publishedOn: "",
        link: "",
        abstract: "",
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
        <DialogTitle>Add Research Paper</DialogTitle>
        <DialogContent>
          <TextField
            name="title"
            label="Title"
            value={formValues.title}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="publisher"
            label="Publisher"
            value={formValues.publisher}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="publishedOn"
            label="Published On"
            value={formValues.publishedOn}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="link"
            label="Link"
            value={formValues.link}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="abstract"
            label="Abstract"
            value={formValues.abstract}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
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

export default ResearchForm;
