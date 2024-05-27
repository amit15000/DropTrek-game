import { gravity } from "../Constants";
import { Obstacle, Sink } from "../Objects";
import { unpad } from "../padding";

export class Ball {
  private x: number;
  private y: number;
  private radius: number;
  private color: string;
  private vx: number;
  private vy: number;
  private vx: number;
  private ctx: CanvasRenderingContext2D;
  private obstacles: Obstacle[];
  private sinks: Sink[];
  private onFinish: (index: number) => void;

  constructor(
    x: number,
    y: number,
    radius: number,
    color: string,
    ctx: CanvasRenderingContext2D,
    obstacles: Obstacle[],
    sinks: Sink[],
    onFinish: (index: number) => void
  ) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.vx = 0;
    this.vy = 0;
    this.ctx = ctx;
    this.radius = radius;
    this.obstacles = obstacles;
    this.sinks = sinks;
    this.onFinish = onFinish;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(unpad(this.x), unpad(this.y), this.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.closePath();
  }

  update() {
    this.vy += gravity;
    this.x += this.vx;
    this.y += this.vy;
  }
}
