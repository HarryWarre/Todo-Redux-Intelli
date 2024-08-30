import React from "react";
import "./App.css";
import { Box, Container } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Todos } from "./modules";

function App() {
  return (
    <Provider store={store}>
      <Box className='App'>
        <Container fixed sx={{ mt: 3 }}>
          <Todos />
        </Container>
      </Box>
    </Provider>
  );
}

export default App;
