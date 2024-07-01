import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Amenities from "./pages/Amenities/Amenities";
import Contact from "./pages/Contacts/Contact";
import Home from "./pages/Home/Home";
import Rooms from "./pages/Rooms/Rooms";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Rooms" element={<Rooms />} />
            <Route path="/Amenities" element={<Amenities />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
