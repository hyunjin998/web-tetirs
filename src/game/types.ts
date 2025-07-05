// game/types.ts

export type BlockMatrix = number[][];
export type Tetromino = {
  shape: BlockMatrix;
  x: number;
  y: number;
};

export type GameField = number[][]; // 20행 x 10열
