// components/TetrisBoard.tsx
import React from "react";
import { useTetris } from "../hooks/useTetris";

export const TetrisBoard: React.FC = () => {
  const { field, current } = useTetris();

  const renderCell = (cell: number, x: number, y: number) => {
    const style = {
      width: "24px",
      height: "24px",
      border: "1px solid #ccc",
      backgroundColor: cell ? "#61dafb" : "#000",
    };
    return <div key={`${x}-${y}`} style={style} />;
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(10, 24px)" }}>
      {field.flatMap((row, y) =>
        row.map((cell, x) => renderCell(cell, x, y))
      )}
    </div>
  );
};
