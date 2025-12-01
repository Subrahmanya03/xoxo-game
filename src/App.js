import React, { useState, useEffect } from "react";
import Board from "./components/Board";

function App() {
  const [tip, setTip] = useState("");

  // Fetch a random tip from API
  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => setTip(data.slip.advice))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial", marginTop: "50px" }}>
      <h1>XO-XO Game</h1>
      <Board />
      {tip && <p style={{ marginTop: "20px", fontStyle: "italic", color: "green" }}>Tip: {tip}</p>}
    </div>
  );
}

export default App;
