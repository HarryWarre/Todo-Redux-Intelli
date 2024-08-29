import { Add } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Todo } from "../../store/type";
import { addTodo } from "../../store/action";
import { AppDispatch } from "../../store/store";

export default function AddTask() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!input || /^\s*$/.test(input)) {
      return;
    }

    const newTodo: Todo = {
      id: Math.floor(Math.random() * 10000),
      text: input,
      isComplete: false,
    };

    dispatch(addTodo(newTodo));
    setInput("");
  };

  return (
    <Card sx={{ padding: 5 }}>
      <CardContent>
        <Typography gutterBottom>Add Todos</Typography>
      </CardContent>
      <CardContent>
        <TextField
          id='input-task'
          variant='outlined'
          fullWidth
          label='Todo title'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </CardContent>

      <CardActions sx={{ pl: 2, display: "flex", justifyContent: "center" }}>
        <Button
          size='small'
          variant='contained'
          startIcon={<Add />}
          onClick={handleSubmit}>
          Add Todo
        </Button>
      </CardActions>
    </Card>
  );
}
