import { Add } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Todo, TodoState } from "../../store/types/type";
import { addTodo } from "../../store/actions/action";
import { AppDispatch } from "../../store/store";
import { toast } from "react-toastify";

export default function AddTask() {
  const [input, setInput] = useState("");
  const heightList = useSelector((state: TodoState) => state.height);
  const dispatch = useDispatch<AppDispatch>();

  const hasError = React.useMemo(() => input === "", [input]);
  // Memo that returns a helper message if value is "error" or a blank string if not
  const getHelperText = React.useMemo(
    () => (input === "" ? "Please type your todos!" : ""),
    [input]
  );

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value);
  }

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

  const showToastMessage = (content: string) => {
    toast.success(content + " Added!");
  };

  return (
    <Card sx={{ padding: 5, height: heightList+ 'px'}}>
      <CardContent>
        <Typography gutterBottom>Add Todos</Typography>
      </CardContent>
      <CardContent>
        <TextField
          error={hasError}
          required
          helperText={getHelperText}
          id='input-task'
          variant='outlined'
          fullWidth
          label='Todo title'
          // value={input}
          value={input}
          // onChange={(e) => setInput(e.target.value)}
          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit(e);
            }
          }}
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
