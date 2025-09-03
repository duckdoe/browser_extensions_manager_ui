import { useState, useEffect } from "react";
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
    <div className="px-4">
      <Header />
      <Navigation />
      {extension.map((item, index) => (
        <Card data={item} key={index} />
      ))}
    </div>
  );
}

export default App;
