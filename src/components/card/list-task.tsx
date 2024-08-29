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
import { TodoState } from "../../store/type";
import { clearTodos, removeTodo, toggleTodo } from "../../store/action";
import { AppDispatch } from "../../store/store";

export default function ListTask() {
  const todos = useSelector((state: TodoState) => state.todos);
  const searchTerm = useSelector((state: TodoState) => state.searchTerm);
  const totalTodos = todos.length;

  const dispatch = useDispatch<AppDispatch>();

  const handleDeleteTodo = (id: number) => {
    dispatch(removeTodo(id));
    console.log(id);
  };

  const handleDeleteAll = () => {
    dispatch(clearTodos());
  };

  const handleToggedTodo = (id: number) => {
    dispatch(toggleTodo(id));
    console.log(id);
  };

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card sx={{ padding: 5 }}>
      <CardContent>
        <Typography gutterBottom>
          Todos
          <Badge
            badgeContent={totalTodos}
            color='primary'
            showZero
            style={{ transform: "translate(15px, 0px)" }}></Badge>
        </Typography>

        {/* Button Remove all if task exists */}
        {filteredTodos.length !== 0 ? (
          <Box display={"flex"} justifyContent={"end"}>
            <Button
              onClick={handleDeleteAll}
              color='inherit'
              variant='text'
              endIcon={<Delete color='error' />}
              sx={{ textTransform: "capitalize" }}>
              Remove all
            </Button>
          </Box>
        ) : (
          ""
        )}

        <List>
          {/* If not task exist */}
          {filteredTodos.length !== 0 ? (
            ""
          ) : (
            <ListItem
              sx={{ border: 1, borderColor: "#bababa", borderRadius: "5px" }}>
              No Todos available
            </ListItem>
          )}
          {/* If task exist */}
          {filteredTodos.map((todo) => (
            <ItemListTask
              key={todo.id}
              name={todo.text}
              isComplete={todo.isComplete}
              onDelete={() => handleDeleteTodo(todo.id)}
              onTogged={() => handleToggedTodo(todo.id)}
            />
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
