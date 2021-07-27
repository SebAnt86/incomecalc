import React, { useState } from "react";
import Form from "./components/Form";
import Result from "./components/Result";

function App() {
  const [result, setResult] = useState({});
  return (
    <div className="App">
      <h1> INCOME CALC</h1>
      <Form setResult={setResult} />
   
      <Result result={result} />
    </div>
  );
}

export default App;
