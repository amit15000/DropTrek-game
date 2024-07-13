// import { useEffect, useRef, useState } from "react";
// import { BallManager } from "../game/classes/BallManager";
// import { pad } from "../game/padding";
// import { WIDTH } from "../game/Constants";

import { Simulate } from "../assets/Simulate";

function Home() {
  // const canvasRef = useRef<unknown>();
  // let [outputs, setOutputs] = useState<{ [key: number]: number[] }>({
  //   0: [],
  //   1: [],
  //   2: [],
  //   3: [],
  //   4: [],
  //   5: [],
  //   6: [],
  //   7: [],
  //   8: [],
  //   9: [],
  //   10: [],
  //   11: [],
  //   12: [],
  //   13: [],
  //   14: [],
  //   15: [],
  //   16: [],
  //   17: [],
  //   18: [],
  //   19: [],
  //   20: [],
  // });
  // async function simulate(ballManager: BallManager) {
  //   let i = 1;
  //   while (i) {
  //     i++;
  //     ballManager.addBall(pad(WIDTH / 2 + 20 * (Math.random() - 0.5)));
  //     await new Promise((resolve) => setTimeout(resolve, 1000));
  //   }
  // }

  // useEffect(() => {
  //   if (canvasRef.current) {
  //     const ballManager = new BallManager(
  //       canvasRef.current as unknown as HTMLCanvasElement,
  //       (index: number, startX?: number) => {
  //         setOutputs((outputs: any) => {
  //           return {
  //             ...outputs,
  //             [index]: [...(outputs[index] as number[]), startX],
  //           };
  //         });
  //       }
  //     );
  //     simulate(ballManager);

  //     return () => {
  //       ballManager.stop();
  //     };
  //   }
  // }, [canvasRef]);

  return (
    <div className="flex px-10">
      <div className="flex flex-col lg:flex-row  items-center justify-between ">
        <Simulate />
        {/* <Quotes /> */}
      </div>
      {/* <FoundIssue /> */}
    </div>
  );
}

export default Home;
