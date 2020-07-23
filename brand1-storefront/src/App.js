import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@brand1/main/lib/Button";
import Input from "@brand1/main/lib/Input";

function App() {
  return (
    <div className="App">
      <Input secondary />
      <Button primary>Test</Button>
    </div>
  );
}

export default App;
