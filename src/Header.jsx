import Logo from "./assets/images/logo.svg";
import lightMode from "./assets/images/icon-moon.svg";
import darkMode from "./assets/images/icon-sun.svg";
import { useEffect, useState } from "react";

function Header() {
  const [mode, setMode] = useState(false);
  function handleClick() {
    let x = mode;
    setMode(!x);
  }

  useEffect(() => {
    let icon = document.querySelector(".light-dark-icon");
    if (!mode) icon.src = lightMode;
    else icon.src = darkMode;
  }, [mode]);

  return (
    <header className="flex justify-between m-4 p-2 shadow-md">
      <img src={Logo} alt="Extensions Manager Logo" className="inline-block" />
      <button onClick={handleClick} className="p-3 bg-neutral-100 rounded-2xl">
        <img
          src={lightMode}
          alt="light-dark-icon"
          className="light-dark-icon inline-block"
        />
      </button>
    </header>
  );
}

export default Header;
