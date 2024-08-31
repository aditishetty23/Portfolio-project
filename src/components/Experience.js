import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <div className="heading-experience">
          <h1>Experience</h1>
        </div>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Data Analytics Intern</h3>
            <h4>Sportz Interactive</h4>
            <p>
              Analyzing HR data to provide insights for decision-making,
              developing metrics and dashboards to track key HR metrics,
              collaborating with HR and business leaders to identify
              opportunities for improvement, and using statistical techniques to
              identify trends and patterns in employee data. Perform statistical
              analysis, create visualizations, and assist in predictive modeling
              for HR initiatives. Stay updated on industry trends to improve
              processes.
            </p>
          </div>
        </div>

        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Business Development Specialist</h3>
            <h4>Standard Multimodal Logistics Pvt Ltd</h4>
            <p>
              Specialised in driving growth and expanding market presence by
              identifying new business opportunities and building strong client
              relationships. I conduct market research, negotiate contracts, and
              collaborate with teams to deliver tailored logistics solutions.
              Focused on exceeding sales targets and developing strategic
              partnerships to support long-term success.
            </p>
          </div>
        </div>

        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Data Analyst</h3>
            <h4>Belle laboratories </h4>
            <p>
              To monitor the quality of data from which organizations make
              informed decisions. To examine complex data to optimize the
              efficiency and quality of the data being collected, resolve data
              quality problems, and collaborate with database developers to
              improve systems and database designs.
            </p>
          </div>
        </div>
        {/*** */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"> </div>
          <div className="timeline-content">
            <h3>Web Development and Design Intern</h3>
            <h4>Easygolife</h4>
            <p>
              Write custom HTML, PHP, CSS and JavaScript for existing websites
              and applications. Design, recommend and pitch improvements to new
              and existing features. Assist in troubleshooting issues on
              web-based systems.
            </p>
          </div>
        </div>
        {/***  */}
      </div>
    </div>
  );
};

export default Experience;
