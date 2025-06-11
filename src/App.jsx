import Navbar from "./Components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import { useState } from "react";

function App() {
  const [sideNavbar, setSideNavbar] = useState(true);

  const setSideNavbarFunc = (value) => {
    setSideNavbar(value);
  };

  return (
    <BrowserRouter>
      <Navbar setSideNavbarfunc={setSideNavbarFunc} sideNavbar={sideNavbar} />
      <Home sideNavbar={sideNavbar} />
    </BrowserRouter>
  );
}

export default App;
