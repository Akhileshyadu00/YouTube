import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import SideNavbar from "./Components/SideNavbar";
import Home from "./Pages/Home";
import Video from "./Components/Video";
import Profile from "./Pages/Profile";

function App() {
  const [sideNavbar, setSideNavbar] = useState(true);

  const setSideNavbarFunc = (value) => {
    setSideNavbar(value);
  };

  return (
    <BrowserRouter>
      {/* Navbar is always shown */}
      <Navbar setSideNavbarfunc={setSideNavbarFunc} sideNavbar={sideNavbar} />

      <div className="flex">
        {/* Side Navbar visible globally */}
        <SideNavbar sideNavbar={sideNavbar} />

        {/* Main Page Content */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home sideNavbar={sideNavbar} />} />
            <Route path="/watch/:id" element={<Video />} />
            <Route path="/user/:id" element={<Profile sideNavbar={sideNavbar} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
