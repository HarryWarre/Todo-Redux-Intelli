import { Delete } from "@mui/icons-material";
import {
  Badge,
  Box,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";
import ItemListTask from "./item-list-task";
import { useDispatch, useSelector } from "react-redux";
import { TodoState } from "../../redux/type";

export default function ListTask() {
  const todos = useSelector((state: TodoState) => state.todos);
  const dispatch = useDispatch();

  return (
    <Card sx={{ padding: 5 }}>
      <CardContent>
        <Typography gutterBottom>
          Todos
          <Badge
            badgeContent={4}
            color='primary'
            style={{ transform: "translate(15px, 0px)" }}></Badge>
        </Typography>

        {/* Button Remove all if task exists */}
        <Box display={"flex"} justifyContent={"end"}>
          <Button
            color='inherit'
            variant='text'
            endIcon={<Delete color='error' />}
            sx={{ textTransform: "capitalize" }}>
            Remove all
          </Button>
        </Box>

        <List>
          {/* If not task exist */}
          <ListItem
            sx={{ border: 1, borderColor: "#bababa", borderRadius: "5px" }}>
            No Todos available
          </ListItem>

          {/* If task exist */}
          <ItemListTask />
          <ItemListTask />
          <ItemListTask />
        </List>
      </CardContent>

      {todos.map((todo) => {
        return <p>{todo.text}</p>;
      })}
    </Card>
  );
}
