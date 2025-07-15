import { useEffect, useRef, useState } from "react";
import { BallManager } from "../game/classes/BallManager";
import axios from "axios";

export function Game() {
  const baseURL = "http://localhost:3000";
  const [ballManager, setBallManager] = useState<BallManager>();
  const canvasRef = useRef<never>();

  useEffect(() => {
    if (canvasRef.current) {
      const ballManager = new BallManager(
        canvasRef.current as unknown as HTMLCanvasElement
      );
      setBallManager(ballManager);
    }
  }, [canvasRef]);

  const clickHandler = async () => {
    const response = await axios.post(`${baseURL}/game`, {
      data: 1,
    });
    if (ballManager) {
      ballManager.addBall(response.data.point);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center">
      <canvas ref={canvasRef} width="800" height="800"></canvas>
      <button
        onClick={clickHandler}
        className="px-2 py-2 text-2xl bg-green-500 text-white font-bold rounded"
      >
        Add Ball
      </button>
    </div>
  );
}
