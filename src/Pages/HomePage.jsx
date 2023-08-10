import React from "react";
import "./DefaultPagestyle.css";
import logo from '.././images/profilepicture.jpg';
function HomePage() {
  return (
    <>
    <p></p>
    <h1>Hello, Welcome to my portfolio </h1>
    <h1> I am Hanitra and I am a junior Full stack developer{" "}</h1>
    <img src={logo} alt="Logo" id="profilepicture" />
 </>
    
  );
}

export default HomePage;
