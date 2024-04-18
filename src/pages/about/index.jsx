import React from "react";
import seventh from "../../assets/seventh.jpg";
import link from "../../assets/link.png";
import "./style.css";

const About = () => {
  return (
    <div className="aboutContainer">
      <p>About Me</p>
      <hr />
      <div className="introBlock">
        <div className="introDescription">
          <p>
            Born and raised in Hampden, Newfoundland, I'm a software developer and student at Keyin College. Ever since I was little, the inside and out of technology has fascinated me, and the desire to push tech to its limits began. 
            Through emulators or game-breaking glitches, I was obsessed with how games and technology ticked. 
          </p>
          <p>
            Now, as I begin my journey into the world of software development, I'm excited to see what pulling back the curtain on all of these
            things that puzzled me as a child will reveal. I'm excited to see what the future holds for me in this field.
          </p>
        </div>
        <div className="image">
          <img src="/about.png" width="100%" alt="pic" />
        </div>
      </div>

      <div className="blogTitleBlock">
        <h1>Recent Badges Earned</h1>
        <div className="blogContainer">
          <div className="blog">
            <h2>
              AWS Foundations (2024) <br />
              Pass Outstanding
            </h2>
            <p>April 15, 2024</p>
            <div className="link">
              <span></span>
            </div>
          </div>
          <div className="blog">
            <h2>
              Enriched Academy Finances 101 <br />
              Pass Outstanding
            </h2>
            <p>March 5th, 2024</p>
            <div className="link">
            </div>
          </div>
          <div className="blog">
            <h2>
              AWS Cloud Practitioner <br />
              COMING SOON!!
            </h2>
            <p></p>
            <div className="link">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
