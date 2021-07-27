import React, {useState} from 'react';
import Form from './components/Form';
import Result from './components/Result';
 
let resultObject = {}
 export const resultDisplay = (result) => {
   resultObject=result;
   console.log("inside function in app : ");
      }
function App() {
  
  return (
    <div className="App">
      <h1> INCOME CALC</h1>
      <Form />
      <h5> result </h5>
      <Result result = {resultObject}/> 
    </div>
  );
}

export default App;
