import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { useState } from "react";
import Video from "./Components/Video";

function App() {
  const [sideNavbar, setSideNavbar] = useState(true);

  const setSideNavbarFunc = (value) => {
    setSideNavbar(value);
  };

  return (
    <BrowserRouter>
      <Navbar setSideNavbarfunc={setSideNavbarFunc} sideNavbar={sideNavbar} />

      <Routes>
        <Route path="/" element={<Home sideNavbar={sideNavbar} />} />
        <Route path="/watch/:id" element={<Video />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
