import React, { useEffect } from "react";
import {
  Checkbox,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import Delete from "@mui/icons-material/Delete";

interface ItemListTaskProps {
  name: string;
  isComplete: boolean;
  onDelete: () => void;
  onTogged: () => void;
}

const ItemListTask: React.FC<ItemListTaskProps> = ({
  name,
  isComplete,
  onDelete,
  onTogged,
}) => {
  return (
    <ListItem
      key={1}
      sx={{
        py: 0.5,
        mt: 2,
        border: 1,
        borderColor: "#bababa",
        borderRadius: "5px",
        flexGrow: 1,
      }}>
      <ListItemIcon>
        <Checkbox
          checked={isComplete}
          onChange={onTogged}
          edge='start'
          tabIndex={-1}
          disableRipple
        />
      </ListItemIcon>

      <ListItemText
        primary={name}
        sx={{
          textDecoration: isComplete ? "line-through" : "none",
        }}
      />

      <Button onClick={onDelete} variant='contained' color='error'>
        <Delete />
      </Button>
    </ListItem>
  );
};

export default ItemListTask;
