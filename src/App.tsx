// App.tsx
import React from "react";
import { TetrisBoard } from "./components/TetrisBoard";

function App() {
  return (
    <div style={{ textAlign: "center", background: "#111", color: "#fff" }}>
      <h1>Web Tetris</h1>
      <TetrisBoard />
    </div>
  );
}

export default App;
