import React from "react";
import { NavLink } from "react-router-dom";
import web from  '../src/Images/About.svg';
import Commmon from "./Common";

function About() {
  return (
    <>
        <Commmon name = 'Welcome to About Page' imgsrc = {web} visit = '/contact' btnname="Contact Now"/>
    </>
  );
}

export default About;
