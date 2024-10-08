import React from "react";
import detection from "../images/age-detection.jpg";
import cms from "../images/cms.png";
import loan from "../images/loan-prediction.jpg";
import registration from "../images/registration.jpg";
import paradise from "../images/tech-paradise.jpg";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
//REACT POPUP BOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Projects = () => {
  //detection
  const openPopupboxDetection = () => {
    const content = (
      <>
        <img
          className="project-image-popupbox"
          src={detection}
          alt="Age Detection System"
        />
        <p>
          In this project, I have used OpenCV for image detection and Streamlit
          for GUI. In this GUI you can upload your images for detection.
        </p>
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://github.com/saurav2021c/CodeClause_Age-Gender-Detection-System"
            )
          }
        >
          https://github.com/aditishetty23/Age-Gender-Detection-System
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigDetection = {
    titleBar: {
      enable: true,
      text: "Age & Gender Detection System",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  return (
    <div id="projects" className="project-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">Projects</h1>
        <div className="image-box-wrapper d-flex justify-content-center">
          {/** */}
          <div className="project-image-box" onClick={openPopupboxDetection}>
            <img
              className="project-image"
              src={detection}
              alt="age-detection project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
            <br />
            <a
              className="hyper-links"
              href="https://github.com/aditishetty23/Age-Gender-Detection-System"
              target="_blank"
              rel="noreferrer"
            >
              Age & Gender Detection System
            </a>
          </div>
          {/** */}
          <div className="project-image-box">
            <img className="project-image" src={cms} alt="cms project" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
            <br />
            <a
              className="hyper-links"
              href="https://github.com/aditishetty23/Maven_Toys_Sales_Dashboard"
              target="_blank"
              rel="noreferrer"
            >
              Maven Sales Dashboard
            </a>
          </div>
          {/** */}
          <div className="project-image-box">
            <img
              className="project-image"
              src={loan}
              alt="loan-prediction project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
            <br />
            <a
              className="hyper-links"
              href="https://github.com/aditishetty23/Loan_Prediction_System"
              target="_blank"
              rel="noreferrer"
            >
              Loan Prediction System
            </a>
          </div>
          {/** */}
          <div className="project-image-box">
            <img
              className="project-image"
              src={registration}
              alt="Registration-form project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
            <br />
            <a
              className="hyper-links"
              href="https://github.com/aditishetty23/AI-Amplify_Twitter_Tweets_Sentiment_Analysis"
              target="_blank"
              rel="noreferrer"
            >
              Twitter Tweets Sentiment Analysis
            </a>
          </div>
          {/** */}
          <div className="project-image-box">
            <img
              className="project-image"
              src={paradise}
              alt="tech-paradise project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
            <br />
            <a
              className="hyper-links"
              href="https://github.com/aditishetty23/House-Price-Prediction-System"
              target="_blank"
              rel="noreferrer"
            >
              House Price Prediction System
            </a>
          </div>
          {/***/}
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigDetection} />
    </div>
  );
};

export default Projects;
