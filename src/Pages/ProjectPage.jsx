import React from "react";
import "./DefaultPagestyle.css";
import Card from 'react-bootstrap/Card';
import logoweatherapp from '.././images/weatherapp.png';
import logomusictherapy from '.././images/musictherapy.png';
import logotribute from '.././images/tributepage.png';
import logoreview from '.././images/reviewpage.png';
function ProjectPage() {

  return (<>
    <Card className="Card">
    <a href="https://weatherapplicationv2.netlify.app"
            target="_blank"
            rel="noreferrer"><Card.Img className="Card" variant="top" src={logoweatherapp} /></a>
    <Card.Body>
      <Card.Title>Weather app</Card.Title>
      <Card.Text>
        This website is indicated the weather and forecast for the next 5 days based on your location 
      </Card.Text>
    </Card.Body>
  </Card>
    <Card className="Card">
    <a href="https://musictherapy.netlify.app"
            target="_blank"
            rel="noreferrer"><Card.Img className="Card" variant="top" src={logomusictherapy} /></a>
    <Card.Body>
      <Card.Title>Music therapy app</Card.Title>
      <Card.Text>
        This website is helping you to relax through music: karaoke, dance, relaxing music and quizzes 
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="Card">
    <a href="https://codepen.io/hanitramelodie/pen/wvPqdOy"
            target="_blank"
            rel="noreferrer"><Card.Img className="Card" variant="top" src={logotribute} /></a>
    <Card.Body>
      <Card.Title>Tribute page</Card.Title>
      <Card.Text>
        This website is a tribute page.It was part of the Web responsive certification with free codecamp
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="Card">
    <a href="https://codepen.io/hanitramelodie/pen/GROOeVO"
            target="_blank"
            rel="noreferrer"><Card.Img className="Card" variant="top" src={logoreview} /></a>
    <Card.Body>
      <Card.Title>Review page</Card.Title>
      <Card.Text>
        This website is a Review page.It was part of the Web responsive certification with free codecamp
      </Card.Text>
    </Card.Body>
  </Card>
  </>
    // <div classname="page">
       
    //   <ul>
   
    //     <p>
    //       <a
    //         href="https://weatherapplicationv2.netlify.app"
    //         target="_blank"
    //         rel="noreferrer"
    //       >
    //         {" "}
    //         Weather app{" "}
    //       </a>{" "}
    //     </p>

    //     <p>
    //       <a
    //         href="https://musictherapy.netlify.app"
    //         target="_blank"
    //         rel="noreferrer"
    //       >
    //         {" "}
    //         Music Therapy app{" "}
    //       </a>{" "}
    //     </p>
    //     <p>
    //       <a 
    //         href="https://codepen.io/hanitramelodie/pen/wvPqdOy"
    //         target="_blank"
    //         rel="noreferrer"
    //       >
    //         {" "}
    //         Tribute page{" "}
    //       </a>{" "}
    //     </p>

    //     <p>
    //       <a
    //         href="https://codepen.io/hanitramelodie/pen/GROOeVO"
    //         target="_blank"
    //         rel="noreferrer"
    //       >
    //         {" "}
    //         Review Page{" "}
    //       </a>{" "}
    //     </p>
    //   </ul>
    // </div>
  );
  }

export default ProjectPage;
