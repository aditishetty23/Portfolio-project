import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faCode,
  faDatabase,
  faMicrochip,
} from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <h1 className="py-5">My Skills</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faDatabase} size="2x" />
              </div>
              <h3>Data Science</h3>
              <p>I have experience in data analysis and visualization.</p>
            </div>
          </div>
          {/*** */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
              </div>
              <h3>Human Resource(HR)</h3>
              <p>I have experience in working as a HR in various companies.</p>
            </div>
          </div>
          {/*** */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon
                  className="icon"
                  icon={faMicrochip}
                  size="2x"
                />
              </div>
              <h3>Machine Learning</h3>
              <p>
                I have experience in building prediction models using supervised
                learning algorithms.
              </p>
            </div>
          </div>
          {/*** */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faCode} size="2x" />
              </div>
              <h3>Web Development</h3>
              <p>I have also created projects in Web domain.</p>
            </div>
          </div>
          {/*** */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
