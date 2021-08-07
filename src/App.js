import React, { useState } from "react";
import Form from "./components/Form";
import Result from "./components/Result";
import Footer from "./components/Footer";
import "./index.css";

import "@fontsource/roboto";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
//import Container from "@material-ui/core/Container";


function App() {
  const [result, setResult] = useState({});
  return (
    <>
      <Box display="flex" justifyContent="center">
        <Typography variant="h4" gutterBottom className="heading">
          CENTERLINK INCOME CALCULATOR
        </Typography>
      </Box>

      <Box className="main-container">
        <Box className="centerbox"
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="start"
        >
          <Box xs={12} sm={6} mx={{ sm: 3 }} my={{xs:3}} className="formbox">
            <Form setResult={setResult} />
          </Box>
          <Box xs={12} sm={6} mx={{ sm: 3 }} my={{xs:3}} className="resultbox">
            <Result result={result} />
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
}

export default App;


