import React from "react";
import "./App.css";
import { Box, Container, Typography } from "@mui/material";
import Main from "./main";
import { Provider } from "react-redux";
import MainLearnRedux from "./learn-redux/main";
import { store } from "./redux/store";
import { coutnerStore } from "./learn-redux/store/reducers/counter-reducer";

function App() {
  return (
    <Provider store={store}>
      <Box className='App'>
        <Container fixed sx={{ mt: 3 }}>
          {/* <Typography variant='h4'>Todo App</Typography>
          <Main /> */}
          <Provider store={coutnerStore}>
            <MainLearnRedux />
          </Provider>
        </Container>
      </Box>
    </Provider>
  );
}

export default App;
