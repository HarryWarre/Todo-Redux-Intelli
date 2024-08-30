import { Box, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { searchTerm } from "../../store/actions/action";
import * as _ from "lodash";
export default function FilterTask() {
  const dispatch = useDispatch<AppDispatch>();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchTerm(event.target.value));
  };

  const debounceSearch = _.debounce(handleSearch, 1000, { maxWait: 2000 });

  return (
    <Box display={"flex"} sx={{ my: 3 }}>
      <TextField
        onChange={debounceSearch}
        variant='outlined'
        placeholder='Search...'
        size='medium'
        style={{ marginRight: 1, width: "570px" }}
      />
    </Box>
  );
}
