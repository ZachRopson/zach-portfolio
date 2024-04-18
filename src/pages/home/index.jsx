import "./style.css";

const Homepage = () => {
  return (
    <div>
      <section id="hero">
        <div className="hero-container">
          <h1 className="hero-text">
            I’m Zachary Ropson, an aspiring software developer and current
            software development student at Keyin College.
          </h1>
          <img className="landing" src="/landing.png" alt="landing" />
        </div>
      </section>
      <section id="portfolio">
        <h1 className="portfolio-header">Projects</h1>
        <div className="separator"></div>
        <div className="project-container">
          <div className="card">
            <h2 className="project-text">01 Loot Cove Website design</h2>
            <img className="project-img" src="/project-1.png" />
          </div>
          <div className="card">
            <h2 className="project-text">02 Loot Cove Website Creation</h2>
            <img className="project-img" src="src\assets\garyBluesDesign.png" />
          </div>
          <div className="card">
            <h2 className="project-text">03 Gary Blues Web Design</h2>
            <img className="project-img" src="src\assets\lootCoveWeb.png" />
          </div>
        </div>
      </section>
      <section id="about">
        <h1 className="about-header">About Me</h1>
        <div className="separator"></div>
        <div className="about-container">
          <p className="about-descrition">
            I'm a hopeful website designer and developer from Newfoundland, currently attending Keyin College for Software Development. 
            I have a passion for creating beautiful and functional websites, and I'm always looking for new opportunities to learn and grow.‍ 
            <span>
            My background is in Child and Youth Care, and I believe this gives me a unique opportunity to use the skills to adapt and to constantly be learning in a new field that I've always loved.
            </span>
          </p>
          <div className="about-right">
            <h2>What I can offer:</h2>
            <div className="accordion">
              <div className="tab">
                <input type="checkbox" name="accordion-1" id="cb0" />
                <label for="cb0" className="tab__label">
                  Web Design
                </label>
                <div className="tab__content">
                  <p>
                    As my experience with Figma, React, Vite, and other software continues to gorw, so will my talents as a web designer. I hope to work together with some of you soon.
                  </p>
                </div>
              </div>
              <div className="tab">
                <input type="checkbox" name="accordion-1" id="cb1" />
                <label for="cb1" className="tab__label">
                  Javascript Coding
                </label>
                <div className="tab__content">
                  <p>
                    My most fluent language as of now is Javascript. I have been working with it for a few years now and I am excited to see where it takes me in the future.
                  </p>
                </div>
              </div>
              <div className="tab">
                <input type="checkbox" name="accordion-1" id="cb2" />
                <label for="cb2" className="tab__label">
                  A Unique Perspective
                </label>
                <div className="tab__content">
                  <p>
                    I come from a Child and Youth Care background, and I believe that this gives me a unique perspective on design and the way that people interact with it. I hope to mold these two fields together in my future work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="skills">
          <ul>
            <li>Coding</li>
            <li>Webflow</li>
            <li>Design</li>
            <li>Coding</li>
            <li>Webflow</li>
            <li>Design</li>
            <li>Coding</li>
            <li>Webflow</li>
            <li>Design</li>
            <li>Coding</li>
            <li>Webflow</li>
            <li>Design</li>
            <li>Coding</li>
            <li>Webflow</li>
            <li>Design</li>
            <li>Coding</li>
            <li>Webflow</li>
            <li>Design</li>
            <li>Coding</li>
            <li>Webflow</li>
            <li>Design</li>
            <li>Coding</li>
            <li>Webflow</li>
            <li>Design</li>
            <li>Coding</li>
            <li>Webflow</li>
            <li>Design</li>
            <li>Webflow</li>
          </ul>
        </div>
        <div className="zigzag-line" />
      </section>
    </div>
  );
};

export default Homepage;
