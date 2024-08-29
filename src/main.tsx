import { Box, Grid2 } from "@mui/material";
import React from "react";
import AddTask from "./components/card/add-task";
import ListTask from "./components/card/list-task";
import FilterTask from "./components/form/filter-task";

export default function Main() {
  return (
    <Box component={"div"}>
      <FilterTask />
      <Grid2 container spacing={2} sx={{ p: 2, gridAutoColumns: "1fr" }}>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <AddTask />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <ListTask />
        </Grid2>
      </Grid2>
    </Box>
  );
}
