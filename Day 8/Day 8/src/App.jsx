import { useRef, useLayoutEffect } from "react";

function Box() {
  const boxRef = useRef();

  useLayoutEffect(() => {
    console.log(boxRef.current.offsetWidth);
  }, []);

  return <div ref={boxRef}>Hello</div>;
}