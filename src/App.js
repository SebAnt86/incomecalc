import React, { useState } from "react";
import Form from "./components/Form";
import Result from "./components/Result";
import Footer from './components/Footer';
import './index.css'

function App() {
    const [result, setResult] = useState({});
    return (
        <div className="page_design" >
              <h1 className="heading"> INCOME CALCULATOR </h1>
              <Form setResult={setResult} />
            <Result result={result} />
            <Footer />
        </div>
    );
}

export default App;