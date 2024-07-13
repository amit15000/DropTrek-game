import express from "express";
const app = express();
const Total_Drops = 19;
const MULTIPLIERS: { [key: number]: number } = {
  1: 20,
  2: 10,
  3: 5,
  4: 3,
  5: 2,
  6: 1.4,
  7: 1.2,
  8: 1.1,
  9: 1.1,
  10: 1,
  11: 1.1,
  12: 1.1,
  13: 1.2,
  14: 1.4,
  15: 2,
  16: 3,
  17: 5,
  18: 10,
  19: 20,
};
