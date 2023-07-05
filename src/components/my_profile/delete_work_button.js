import { Delete } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import axios from "axios";
import React from "react";

function DeleteWorkButton({ data, setData }) {
  const handleDelete = async () => {
    const email = localStorage.getItem("user");
    try {
      await axios
        .delete(
          `http://localhost:8000/api/students?email=${email}&id=${data._id}`
        )
        .then((res) => {
          console.log(res.data);
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
