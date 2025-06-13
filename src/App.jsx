import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Video from "./Components/Video";
import Profile from "./Pages/Profile";
import Create from "./Pages/Create";
import Login from "./Components/Login";
import Registration from "./Components/Registration";

function App() {
  const [sideNavbar, setSideNavbar] = useState(true);

  const setSideNavbarFunc = (value) => {
    setSideNavbar(value);
  };

  return (
    <BrowserRouter>
      {/* Global Navbar */}
      <Navbar setSideNavbarfunc={setSideNavbarFunc} sideNavbar={sideNavbar} />

      {/* Route-based Page Rendering */}
      <Routes>
        <Route path="/" element={<Home sideNavbar={sideNavbar} />} />
        <Route path="/watch/:id" element={<Video />} />
        <Route path="/user/:id" element={<Profile sideNavbar={sideNavbar} />} />
        <Route path="/user/:id/create" element={<Create />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Registration />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
