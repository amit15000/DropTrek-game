import {
  HEIGHT,
  NUM_SINSK,
  WIDTH,
  obstacleRadius,
  SINK_WIDTH,
} from "./Constants";

import { pad } from "./padding";

export interface Obstacle {
  x: number;
  y: number;
  radius: number;
}

export interface Sink {
  x: number;
  y: number;
  width: number;
  height: number;
  multiplier?: number;
}

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

//Obstacles Generation
export const createObstacles = (): Obstacle[] => {
  const obstacles: Obstacle[] = [];
  const rows = 20;

  for (let row = 2; row < rows; row++) {
    const numObstacles = row + 1;
    const y = row * 35; //verticle gap b/w rows

    const spacing = 40; //horizontal gap b/t obstacles

    for (let col = 0; col < numObstacles; col++) {
      const x = WIDTH / 2 - spacing * (col - row / 2);
      obstacles.push({ x: pad(x), y: pad(y), radius: obstacleRadius });
    }
  }
  return obstacles;
};
// Sinks Generator
export const createSinks = (): Sink[] => {
  const sinks = [];
  const spacing = obstacleRadius * 2;
  const width = SINK_WIDTH;
  const y = HEIGHT - 100;

  for (let i = 0; i < NUM_SINSK; i++) {
    const x =
      WIDTH / 2 + SINK_WIDTH * (Math.floor(NUM_SINSK / 2) - i) - spacing * 2;

    sinks.push({ x, y, width, height: width, multiplier: MULTIPLIERS[i + 1] });
  }
  return sinks;
};
