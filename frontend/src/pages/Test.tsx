import { useRef, useEffect } from "react";

function Test() {
  const requestIdRef = useRef<number>();

  const draw = () => {
    // Your drawing logic here
    console.log("Drawing...");
  };

  const update = () => {
    draw();
    requestIdRef.current = requestAnimationFrame(update);
  };

  const stop = () => {
    if (requestIdRef.current) {
      cancelAnimationFrame(requestIdRef.current);
    }
  };

  useEffect(() => {
    requestIdRef.current = requestAnimationFrame(update);

    // Clean up on component unmount
    return () => stop();
  }, []);

  return (
    <div>
      <h1>Animation Component</h1>
      <button onClick={stop}>Stop Animation</button>
    </div>
  );
}

export default Test;
