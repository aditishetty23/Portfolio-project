import React from "react";
import author from "../me.jpg";
const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">About Me</h1>
          <p className="aboutme-para">
            As a Master's in Data Science student at DePaul University, I bring
            a unique blend of technical expertise, leadership, and
            organizational skills to every project I undertake. With experience
            in data analysis, web design, and community outreach, I am committed
            to driving impactful results through innovative solutions. My
            passion for learning, coupled with a strong work ethic, fuels my
            desire to contribute effectively to any team and make a meaningful
            difference.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
