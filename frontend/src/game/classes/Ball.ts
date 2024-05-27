export class Ball {
  private x: number;
  private y: number;
  private radius: number;
  private color: number;
  private vx: number;
  private vy: number;
  private vx: number;
  private ctx: CanvasRenderingContext2D;

  //import Sink

  private onFinish: (index: number) => void;

  constructor(
    x: number,
    y: number,
    color: string,
    ctx: CanvasRenderingContext2D,
    obstacles: Ob
  );
}
