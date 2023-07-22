import { Delete } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import axios from "axios";
import React from "react";

function DeleteWorkButton({ data, setData }) {
  const handleDelete = async () => {
    const id = localStorage.getItem("user");
    console.log(data);
    try {
      const type =
        localStorage.getItem("type") === "student" ? "students" : "faculties";
      const URL = `http://localhost:8000/api/${type}/${id}?workId=${data._id}`;
      await axios.delete(URL).then((res) => {
        setData(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <IconButton onClick={handleDelete}>
      <Delete color="error" />
    </IconButton>
  );
}

export default DeleteWorkButton;
