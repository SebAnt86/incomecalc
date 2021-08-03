import React, { useState } from "react";
import Form from "./components/Form";
import Result from "./components/Result";
import Footer from "./components/Footer";
import "./index.css";

import "@fontsource/roboto";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

function App() {
  const [result, setResult] = useState({});
  return (
    <>
      <Box display="flex" justifyContent="center">
        <Typography variant="h4" gutterBottom className="heading">
          CENTERLINK INCOME CALCULATOR
        </Typography>
      </Box>

      <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
        <Box item xs={12} sm={6} mx={{sm: 5}}>
          <Form setResult={setResult} />
        </Box>
        <Box  mt={{xs:5, lg: 0}}>
          <Result result={result} />
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default App;

{
  /* <div className="page_design" >
              <h1 className="heading"> INCOME CALCULATOR </h1>
              <Form setResult={setResult} />
            <Result result={result} />
            <Footer />
        </div> */
}
