import React from "react";
import "./page.css";

const about = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row clearfix">
          <div className="content-column col-md-6 col-sm-12 col-xs-1">
            <div className="inner-column">
              <div className="sec-title">
                <div className="title">About Me</div>
                <h2>
                  Priyanshu Ranjan <br /> (aka prrockzed)
                </h2>
              </div>
              <div className="text">
                Hi there! I am Priyanshu Ranjan, 3rd year undergraduate student
                at IIT Kharagpur. I am a full stack web developer and have
                experience in building web applications using ReactJS, NodeJS,
                MongoDB, PostgreSQL, etc. I have a good grasp over Data
                Structures and Algorithms.
                <br />
                <br />
                This is a news website built using NextJS, ReactJS, TailwindCSS,
                and Firebase. It is a PWA and is fully responsive. It has
                features like authentication, smooth browsing, real-time updates
                and breaking news.
                <br />
                <br />
                My linkedin profile is linked below.
              </div>
              <a
                href="https://www.linkedin.com/in/prrockzed/"
                className="theme-btn no-underline btn-style-three"
                target="_blank"
              >
                Linkedin
              </a>
            </div>
          </div>

          <div className="pt-20 image-column col-md-6 col-sm-12 col-xs-12">
            <div
              className="inner-column "
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="image">
                <img src="/image.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;
