import React from "react";
import lootCoveWeb from "../../assets/lootCoveWeb.png";
import nine from "../../assets/nine.jpg";
import eight from "../../assets/eight.jpg";
import second from "../../assets/second.jpg";
import garyBluesDesign from "../../assets/garyBluesDesign.png";
import garyBluesCart from "../../assets/garyBluesCart.png";
import third from "../../assets/third.jpg";
import project1 from "/project-1.png";
import first from "../../assets/first.jpg";
import ten from "../../assets/ten.jpg";
import "./style.css";

const Project = () => {
  return (
    <div className="projectContainer">
      <div className="projectImage">
        <img src={ten} alt="pic" />
      </div>
      <div className="titleContainer">
        <h1>Collaborative Projects</h1>
        <p>
          As my time at Keyin college continues and I enter into the workforce in this field, I hope to fil this page with lots of awesome projects that I have worked on. I am excited to see what the future holds for me in this field. For now, I've included a few screenashots of websites I've been a part of, and some awesome photos to take up the blank space while I wait for more amazing projects to come!
        </p>
      </div>
      <div className="projectImage">
        <img src={eight} height="623" alt="pic" />
      </div>
      <div className="projectImagesContainer">
        <div className="project1">
          <img src={nine} width="100%" alt="pic" />
        </div>
        <div className="project1">
          <img src={third} width="100%" alt="pic" />
        </div>
      </div>

      <div className="allProjects">
        <div className="title">
          <h1>My Website Work</h1>
        </div>
        <div className="imageContainer">
          <div className="project">
            <img src={lootCoveWeb} width="100%" alt="pic" />
            <h2>Loot Cove</h2>
          </div>
          <div className="project">
            <img src={garyBluesDesign} width="100%" alt="pic" />
            <h2>Gary Blues</h2>
          </div>
          <div className="project">
            <img src={first} width="100%" alt="pic" />
            <h2>New Projects Coming Soon</h2>
          </div>
          <div className="project">
            <img src={project1} width="100%" alt="pic" />
            <h2>Loot Cove</h2>
          </div>
          <div className="project">
            <img src={garyBluesCart} width="100%" alt="pic" />
            <h2>Gary Blues</h2>
          </div>
          <div className="project">
            <img src={first} width="100%" alt="pic" />
            <h2>New Projects Coming Soon</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
