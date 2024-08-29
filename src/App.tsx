import React from "react";
import "./App.css";
import { Box, Container, Typography } from "@mui/material";
import Main from "./main";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Box className='App'>
        <Container fixed sx={{ mt: 3 }}>
          <Typography variant='h4'>Todo App</Typography>

          <Main />

          {/* <Counter /> */}
        </Container>
      </Box>
    </Provider>
  );
}

export default App;
