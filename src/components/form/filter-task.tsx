import { Box, TextField } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { searchTerm } from "../../store/action";

export default function FilterTask() {
  const dispatch = useDispatch<AppDispatch>();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchTerm(event.target.value));
  };

  return (
    <Box display={"flex"} sx={{ mt: 3, ml: 2 }}>
      <TextField
        onChange={handleSearch}
        variant='outlined'
        placeholder='Search...'
        size='medium'
        style={{ marginRight: 1, width: "550px" }}
      />
    </Box>
  );
}
