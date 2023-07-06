import { Delete } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import axios from "axios";
import React from "react";

function DeleteWorkButton({ data, link, setData }) {
  const handleDelete = async () => {
    const id = localStorage.getItem("user");
    try {
      if (link) {
        await axios
          .delete(`http://localhost:8000/api/students/${id}?link=${link}`)
          .then((res) => {
            setData(res.data);
          });
      } else {
        await axios
          .delete(`http://localhost:8000/api/students/${id}?workId=${data._id}`)
          .then((res) => {
            setData(res.data);
          });
      }
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
