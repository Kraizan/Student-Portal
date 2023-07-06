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

const ExperienceForm = ({ setData }) => {
  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    company: "",
    from: "",
    to: "",
    position: "",
    description: "",
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
      await axios
        .put(`http://localhost:8000/api/students/${id}/add`, {
          workingExperience: formValues,
        })
        .then((res) => {
          setData(res.data);
        });

      // Reset form values
      setFormValues({
        company: "",
        from: "",
        to: "",
        position: "",
        description: "",
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
        <DialogTitle>Add Working Experience</DialogTitle>
        <DialogContent>
          <TextField
            name="company"
            label="Company"
            value={formValues.company}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="from"
            label="From"
            value={formValues.from}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="to"
            label="To"
            value={formValues.to}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="position"
            label="Position"
            value={formValues.position}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="description"
            label="Description"
            value={formValues.description}
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

export default ExperienceForm;
