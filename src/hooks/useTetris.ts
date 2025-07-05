// hooks/useTetris.ts
import { useState, useEffect } from "react";
import { createEmptyField } from "../game/logic";
import { Tetromino } from "../game/types";

export const useTetris = () => {
  const [field, setField] = useState(createEmptyField());
  const [current, setCurrent] = useState<Tetromino | null>(null);

  // 초기 블록 생성
  useEffect(() => {
    spawnNewBlock();
  }, []);

  const spawnNewBlock = () => {
    // T블록 고정 예시
    setCurrent({
      shape: [
        [0, 1, 0],
        [1, 1, 1],
        [0, 0, 0],
      ],
      x: 3,
      y: 0,
    });
  };

  return {
    field,
    current,
  };
};
