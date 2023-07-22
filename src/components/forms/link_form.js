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
import AddLinkButton from "../buttons/add_link_button";

const LinkForm = ({ setData }) => {
  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState({ title: "", link: "" });

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
      const type =
        localStorage.getItem("type") === "student" ? "students" : "faculties";
      const URL = `http://localhost:8000/api/${type}/${id}/add`;
      await axios
        .put(URL, {
          hyperlinks: formValues,
        })
        .then((res) => {
          setData(res.data);
        });

      // Reset form values
      setFormValues({ title: "", link: "" });
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <AddLinkButton onClick={handleOpen} />
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>Add New Link</DialogTitle>
        <DialogContent>
          <TextField
            name="title"
            label="Title"
            value={formValues.title}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogContent>
          <TextField
            name="link"
            label="Link"
            value={formValues.link}
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

export default LinkForm;
