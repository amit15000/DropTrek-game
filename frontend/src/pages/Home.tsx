// import { useEffect, useRef, useState } from "react";
// import { BallManager } from "../game/classes/BallManager";
// import { pad } from "../game/padding";
// import { WIDTH } from "../game/Constants";

import { Simulate } from "../assets/Simulate";

function Home() {
  return (
    <div className="flex px-10">
      <div className="flex flex-col lg:flex-row  items-center justify-between ">
        <Simulate />
      </div>
    </div>
  );
}

export default Home;
