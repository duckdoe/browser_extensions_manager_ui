import { useState, useEffect } from "react";
import Switch from "./Switch.jsx";
import Remove from "./Remove.jsx";
import Header from "./Header.jsx";
import Navigation from "./Navigation.jsx";

function App() {
  const [extension, setExtension] = useState([]);
  useEffect(() => {
    fetch("src/data.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => console.log(data));
  }, []);
  return (
    <>
      <Header />
      <Navigation />
      <Switch />
      <Remove />
    </>
  );
}

export default App;
