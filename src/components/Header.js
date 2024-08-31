import React from "react";
import Typed from "react-typed";
import resume from "../images/resume.pdf";

const Header = () => {
  return (
    <>
      <div id="home" className="header-wraper">
        <div className="main-info">
          <h3>Hi ! It's</h3>
          <h1>Aditi Shetty</h1>
          <h3>I am </h3>

          <Typed
            className="typed-text"
            strings={[
              "an Engineering graduate student.",
              "completed my B.Tech in A.I and Data Science",
              "a student of TCET, Mumbai.",
              "a Data Analyst.",
              "a student also worked as HR Interns.",
              "learning and upskilling myself by Higher Studies.",
            ]}
            typeSpeed={40}
            backSpeed={40}
            loop
          />
          <a href={resume} className="btn-main-offer" target="_blank">
            Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
