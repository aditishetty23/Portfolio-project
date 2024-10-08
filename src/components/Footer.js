import React from "react";
import { Link } from "react-scroll";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6 details">
            <div className="d-flex">
              <p>Chicago, Illinois, United States</p>
            </div>
            <div className="d-flex">
              <a href="aditi23shetty@gmail.com">aditi23shetty@gmail.com</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6 ">
            <div className="row footernavwrap">
              <div className="col">
                <Link to="home" className="footer-nav">
                  Home
                </Link>
                <br />
                <Link
                  to="about"
                  offset={5}
                  duration={500}
                  className="footer-nav"
                >
                  About Me
                </Link>
                <br />
                <Link
                  to="skills"
                  offset={0}
                  duration={500}
                  className="footer-nav"
                >
                  Skills
                </Link>
              </div>
              <div className="col">
                <Link
                  to="experience"
                  offset={0}
                  duration={500}
                  className="footer-nav"
                >
                  Experience
                </Link>
                <br />
                <Link
                  to="projects"
                  offset={0}
                  duration={500}
                  className="footer-nav"
                >
                  Projects
                </Link>
                <br />
                <Link
                  to="contacts"
                  offset={0}
                  duration={500}
                  className="footer-nav"
                >
                  Contacts
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 ">
            <p className="footershare">Connect with me on:</p>
            <div className="d-flex justify-content-center">
              <a
                href="https://www.linkedin.com/in/aditi-shetty23/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-primary mx-3">LinkedIn</button>
              </a>
              <a
                href="https://github.com/aditishetty23"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-primary mx-3">Github</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="pt-3 text-center copyright">
        Copyright&copy;
        {new Date().getFullYear()}&nbsp;Aditi Shetty | All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
