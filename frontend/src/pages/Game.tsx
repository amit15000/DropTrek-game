import { useEffect, useRef, useState } from "react";
import { BallManager } from "../game/classes/BallManager";
import axios from "axios";

export function Game() {
  const baseURL = "https://droptrek.onrender.com";
  const [ballManager, setBallManager] = useState<BallManager>();
  const canvasRef = useRef<unknown>();

  useEffect(() => {
    if (canvasRef.current) {
      const ballManager = new BallManager(
        canvasRef.current as unknown as HTMLCanvasElement
      );
      setBallManager(ballManager);
    }
  }, [canvasRef]);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center">
      <canvas ref={canvasRef} width="800" height="800"></canvas>
      <button
        className="px-2 py-2 text-2xl bg-green-500 text-white font-bold rounded"
        onClick={async () => {
          const response = await axios.post(`${baseURL}/game`, {
            data: 1,
          });
          if (ballManager) {
            ballManager.addBall(response.data.point);
          }
        }}
      >
        Add ball
      </button>
    </div>
  );
}
