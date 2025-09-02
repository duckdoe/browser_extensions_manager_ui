import { useState, useEffect } from "react";
import Switch from "./Switch.jsx";
import Remove from "./Remove.jsx";
import Header from "./Header.jsx";
import Navigation from "./Navigation.jsx";
import Card from "./Card.jsx";

function App() {
  const [extension, setExtension] = useState([]);
  useEffect(() => {
    fetch("src/data.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => setExtension(data));
  }, []);
  return (
    <>
      <Header />
      <Navigation />
      <Switch />
      <Remove />
      {extension.map((item, index) => {
        return <Card data={item} key={index} />;
      })}
    </>
  );
}

export default App;
