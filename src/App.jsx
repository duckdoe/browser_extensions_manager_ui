import { useState } from "react";
import Switch from "./Switch.jsx";
import Remove from "./Remove.jsx";
import Header from "./Header.jsx";
import Navigation from "./Navigation.jsx";
function App() {
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
