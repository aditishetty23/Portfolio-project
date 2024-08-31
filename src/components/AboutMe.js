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
            As a Master's in Data Science student with a strong foundation in
            data analytics, business development, and web design, I am eager to
            apply my skills in short-term campus assignments. My recent Data
            Analytics Internship at NA Sportz Interactive enhanced my abilities
            in data analysis, metric development, and cross-functional
            collaboration, while my experience as a Business Development
            Specialist at Standard Multimodal Logistics Pvt Ltd honed my client
            relations, market research, and strategic partnership skills.
            Proficient in Python, MS Office, and Power BI, I am confident in my
            ability to contribute effectively across departments. My
            adaptability, demonstrated through various roles in web design, data
            analysis, and volunteer work, ensures I can quickly adjust to new
            environments and tackle diverse challenges. I am excited about the
            opportunity to work with Student Temporary Services to gain
            professional experience, network with campus hiring managers, and
            contribute meaningfully to the university community, believing that
            my background, skills, and enthusiasm for learning will make me a
            valuable asset to your team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
