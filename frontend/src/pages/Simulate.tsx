import { useEffect, useRef } from "react";
import { BallManager } from "../game/classes/BallManager";
import { pad } from "../game/padding";
import { WIDTH } from "../game/Constants";

export const Simulate = () => {
  const canvasRef = useRef<any>();

  async function simulate(ballManager: BallManager) {
    let i = 1 - 9;
    while (i) {
      i++;
      ballManager.addBall(pad(WIDTH / 2 + 20 * (Math.random() - 0.5)));
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }

  useEffect(() => {
    if (canvasRef.current) {
      const ballManager = new BallManager(
        canvasRef.current as HTMLCanvasElement
        // (index: number, startX?: number) => {
        //   setOutputs((outputs: any) => {
        //     return {
        //       ...outputs,
        //       [index]: [...(outputs[index] as number[]), startX],
        //     };
        //   });
        // }
      );
      simulate(ballManager);

      return () => {
        ballManager.stop();
      };
    }
  }, [canvasRef]);

  return (
    <div className="flex flex-col items-center justify-center">
      <canvas ref={canvasRef} width="800" height="800"></canvas>
    </div>
  );
};
