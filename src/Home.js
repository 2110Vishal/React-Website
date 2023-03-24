import React from "react";
import { NavLink } from "react-router-dom";
import web from  '../src/Images/Rocket.svg';
import Commmon from "./Common";


function Home() {
  return (
    <>
        <Commmon name='Business Zone With' imgsrc = {web} visit = '/service' btnname="Get Started"/>
    </>
  );
}

export default Home;
