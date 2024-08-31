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
            As a recent BTech graduate in Artificial Intelligence and Data
            Science, I am passionate about leveraging technology to create
            impactful solutions. My academic journey has equipped me with strong
            skills in Python, Advanced Excel, SQL, Power BI, and Machine
            Learning, along with hands-on experience in project development and
            data analysis. I excel in collaborative environments and enjoy
            tackling complex challenges head-on. My expertise also includes web
            scraping techniques, which I've effectively used to gather and
            analyze data for various projects. I'd love to connect and explore
            how I can contribute to your team!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
