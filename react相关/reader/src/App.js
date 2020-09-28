import React from "react";
import { useState,useEffect } from "react";
import "./App.css";
console.log(useEffect);

function App() {
  const [count, setCount] = useState(0);
  // console.trace('App');
  useEffect(() => {
    console.trace('useEffect');
    setCount(1);
  },[]);

  return <div className="App">{count}</div>;
}

export default App;
