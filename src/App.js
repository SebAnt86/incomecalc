import React, { useState } from "react";
import Form from "./components/Form";
import Result from "./components/Result";
import Footer
 from "./components/Footer";
function App() {
  const [result, setResult] = useState({});
  return (
    <div className="App">
      <h1> INCOME CALC</h1>
      <Form setResult={setResult} />
   
      <Result result={result} />
      <Footer />
    </div>
  );
}

export default App;
