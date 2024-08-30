import React from "react";
import { Box, Grid2, Typography } from "@mui/material";
import AddTask from "../../components/card/add-task";
import FilterTask from "../../components/form/filter-task";
import ListTask from "../../components/card/list-task";

export default function Todos() {
  return (
    <Box component={"div"}>
      <Typography variant='h4'>Todo App</Typography>
      <FilterTask />
      <Grid2
        container
        direction='row'
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "stretch",
          height: "100%", // Đảm bảo chiều cao của Grid2
        }}>
        <Grid2
          size={{ xs: 12, md: 6 }}
          sx={{ height: "100%" }} // Đảm bảo chiều cao của mỗi cột
        >
          <Box
            sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <AddTask />
          </Box>
        </Grid2>
        <Grid2
          size={{ xs: 12, md: 6 }}
          sx={{ height: "100%" }} // Đảm bảo chiều cao của mỗi cột
        >
          <Box
            sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <ListTask />
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}
