import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Navigate, Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Service from "./Service";
import BasicExample from "./Navbar";
import Footer from "./Footer"

function App() {
  return (
    <>
    <BasicExample/>
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/about' element={<About/>} />
      <Route exact path='/service' element={<Service/>} />
      <Route exact path='/contact' element={<Contact/>} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
