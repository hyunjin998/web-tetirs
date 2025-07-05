// game/logic.ts

export const createEmptyField = (rows = 20, cols = 10): number[][] => {
    return Array.from({ length: rows }, () => Array(cols).fill(0));
  };
  