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
import { useDispatch, useSelector } from "react-redux";
import { Todo, TodoState } from "../../store/types/type";
import { addTodo } from "../../store/actions/action";
import { AppDispatch } from "../../store/store";
import { toast } from "react-toastify";

export default function AddTask() {
  const [input, setInput] = useState("");
  const heightList = useSelector((state: TodoState) => state.height);
  const [isFocus, setIsFocus] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const hasError = isFocus && input.trim() === "";

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Not reload

    if (!input || /^\s*$/.test(input)) {
      return;
    }
    //After condition text value
    showToastMessage(input); // Notify

    const newTodo: Todo = {
      id: Math.floor(Math.random() * 10000),
      text: input,
      isComplete: false,
    };

    dispatch(addTodo(newTodo));

    setInput("");
  };

  // Toastify message
  const showToastMessage = (content: string) => {
    toast.success(content + " Added!");
  };

  return (
    <Card sx={{ padding: 5, height: heightList + "px" }}>
      <CardContent>
        <Typography gutterBottom>Add Todos</Typography>
      </CardContent>
      <CardContent>
        <TextField
          error={hasError}
          required
          helperText={hasError ? "Please type your todos!" : ""}
          id='input-task'
          variant='outlined'
          fullWidth
          label='Todo title'
          value={input}
          onChange={handleChange}
          onFocus={() => setIsFocus(true)}
          onBlur={() => {
            setIsFocus(false);
          }} // Stop Focus will stop validate
          onKeyDown={(e) => {
            // Submit enter will active here
            if (e.key === "Enter") {
              handleSubmit(e);
            }
          }}
        />
      </CardContent>

      <CardActions sx={{ pl: 2, display: "flex", justifyContent: "center" }}>
        <Button // Alternative options to add Todo
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
