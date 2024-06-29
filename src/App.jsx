import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";


function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Header />
          
      
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;