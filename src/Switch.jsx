import { useState } from "react";
import { useEffect } from "react";

function Switch({ isActive }) {
  const [toggle, setToggle] = useState(isActive);
  function handleClick() {
    let x = toggle;
    setToggle(!x);
  }

  return (
    <button
      className={`${
        toggle ? "bg-red-500" : "bg-neutral-300"
      } w-8 rounded-2xl p-small duration-100 cursor-pointer`}
      onClick={handleClick}
    >
      <div
        className={`bg-neutral-0 w-4 h-4 rounded-full relative ${
          toggle ? "left-small" : "left-0"
        } duration-150 cursor-pointer circle`}
      ></div>
    </button>
  );
}

export default Switch;
