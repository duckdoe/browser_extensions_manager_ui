import { useState } from "react";
import { useEffect } from "react";

function Switch() {
  const [toggle, setToggle] = useState(false);
  function handleClick() {
    let x = toggle;
    setToggle(!x);
  }

  useEffect(() => {
    let circle = document.getElementById("circle");
    let buttonToggle = document.getElementById("buttonToggle");
    buttonToggle.classList.toggle("bg-red-400");
    circle.classList.toggle("left-small");
    circle.classList.toggle("left-0");
  }, [toggle]);
  return (
    <button
      className="bg-neutral-300 w-8 rounded-2xl p-small"
      onClick={handleClick}
      id="buttonToggle"
    >
      <div
        className="bg-neutral-0 w-4 h-4 rounded-full relative left-0"
        id="circle"
      ></div>
    </button>
  );
}

export default Switch;
