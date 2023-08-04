import React from "react";
import "./DefaultPagestyle.css";
import CV from "./pdfs/CV.pdf";
function AboutPage() {
  return (
    <> <h2 classname="page">
    An enthusiastic educated graduate with an Engineering degree from French
    Engineering School ESTIA and with a Master of Science in Computer Software
    and Techniques from Cranfield University. With a committed and curious
    attitude, I am interested in developing my knowledge and experiences.
  </h2>
  <h2 >Please find my <a  href={CV} target="_blank" rel="noreferrer"><span className="aboutmelink">CV here </span></a></h2>
   </>
   
  );
}

export default AboutPage;
