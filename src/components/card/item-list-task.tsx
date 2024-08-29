import { CheckBox, Delete } from "@mui/icons-material";
import {
  Button,
  Checkbox,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

export default function ItemListTask() {
  return (
    <ListItem
      sx={{
        py: 0.5,
        mt: 2,
        border: 1,
        borderColor: "#bababa",
        borderRadius: "5px",
      }}>
      <ListItemIcon>
        <Checkbox edge='start' checked={false} tabIndex={-1} disableRipple />
      </ListItemIcon>
      <ListItemText primary={"Job"} />
      <Button variant='contained' color='error'>
        <Delete />
      </Button>
    </ListItem>
  );
}
