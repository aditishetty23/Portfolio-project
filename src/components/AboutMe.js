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
            As a motivated Master's in Data Science student with a strong
            foundation in data analytics, business development, and web design,
            I am eager to leverage my skills in a variety of short-term
            assignments across campus. In my recent role as a Data Analytics
            Intern at NA Sportz Interactive, I honed my ability to analyze data,
            develop metrics, and collaborate with cross-functional teams to
            drive improvements. My experience as a Business Development
            Specialist at Standard Multimodal Logistics Pvt Ltd further
            developed my skills in client relations, market research, and
            strategic partnerships, all of which I am excited to bring to this
            role. Additionally, my technical proficiency in tools such as
            Python, MS Office, and Power BI, combined with my strong
            communication and organizational skills, make me confident in my
            ability to contribute effectively in any department. My
            adaptability, demonstrated through various roles in web design, data
            analysis, and volunteer work, ensures I can quickly acclimate to new
            environments and take on diverse challenges. The opportunity to work
            with Student Temporary Services excites me as it aligns with my goal
            of gaining professional experience, networking with campus hiring
            managers, and making meaningful contributions to the university
            community. I am confident that my background, skills, and enthusiasm
            for learning will make me a valuable asset to your team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
