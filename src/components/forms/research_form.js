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
import AddWorkButton from "../buttons/add_work_button";

const ResearchForm = ({ setData }) => {
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
      const id = localStorage.getItem("user");
      if (formValues.to === "") {
        formValues.to = "present";
      }
      const type =
        localStorage.getItem("type") === "student" ? "students" : "faculties";
      const URL = `http://localhost:8000/api/${type}/${id}/add`;
      await axios
        .put(URL, {
          researchPapers: formValues,
        })
        .then((res) => {
          setData(res.data);
        });

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
