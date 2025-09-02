import { useState } from "react";
import { useEffect } from "react";

function Switch() {
  const [toggle, setToggle] = useState(false);
  function handleClick() {
    let x = toggle;
    setToggle(!x);
  }

  useEffect(() => {
    let c = document.getElementById("circle");
    let bT = document.getElementById("buttonToggle");
    bT.classList.toggle("bg-red-500");
    c.classList.toggle("left-small");
    c.classList.toggle("left-0");
  }, [toggle]);

  return (
    <button
      className="bg-neutral-300 w-8 rounded-2xl p-small duration-100 cursor-pointer"
      onClick={handleClick}
      id="buttonToggle"
    >
      <div
        className="bg-neutral-0 w-4 h-4 rounded-full relative left-0 duration-150 cursor-pointer"
        id="circle"
      ></div>
    </button>
  );
}

export default Switch;
