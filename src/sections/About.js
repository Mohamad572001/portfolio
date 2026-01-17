import aboutImg from '../assets/about-me-color.jpg';

export default function About() {
  return (
    <section id="about">
      <h2>About Me</h2>

      <div className="aboutWrap card glassCard">
        {/* LEFT: Image */}
        <div className="aboutImgWrap">
          <img className="aboutImg" src={aboutImg} alt="Mohamad Farhat" />
        </div>

        {/* RIGHT: Content */}
        <div className="aboutContent">
          <h3 className="aboutTitle">Mohamad Farhat</h3>

          <p className="aboutText">
            I’m a Full Stack Developer focused on building real-world web
            applications. I enjoy working across frontend and backend, creating
            clean UI, secure systems, and practical features like product
            management, auctions, dashboards, and authentication.
          </p>

          <div className="aboutHighlights">
            <span className="aboutPill">Full Stack</span>
            <span className="aboutPill">PHP + MySQL</span>
            <span className="aboutPill">JavaScript</span>
            <span className="aboutPill">React (Basic)</span>
            <span className="aboutPill">Node.js (Basic)</span>
          </div>

          {/* Timeline */}
          <div className="timeline">
            <h4 className="timelineTitle">Education & Experience</h4>

            <div className="timelineItem">
              <div className="timelineDot" />
              <div className="timelineContent">
                <div className="timelineHeader">
                  <span className="timelineRole">Education</span>
                  <span className="timelineDate">2023 – 2026</span>
                </div>
                <p className="timelineText">
                  Information Systems / Software Development — focus on web
                  development, databases, system analysis, and project building.
                </p>
              </div>
            </div>

            <div className="timelineItem">
              <div className="timelineDot" />
              <div className="timelineContent">
                <div className="timelineHeader">
                  <span className="timelineRole">Project Experience</span>
                  <span className="timelineDate">2025 – 2026</span>
                </div>
                <p className="timelineText">
                  Built <b>Craftify</b>, a full-stack marketplace with auctions,
                  seller dashboards, and admin management using PHP, MySQL,
                  JavaScript, Bootstrap, and AJAX.
                </p>
              </div>
            </div>

            {/* Add more items easily */}
            {/* <div className="timelineItem">...</div> */}
          </div>

          <div className="aboutActions">
            <a className="btn primary" href="#contact">
              Contact Me
            </a>
            <a className="btn" href="#projects">
              View Projects
            </a>
            <a
                href={`${process.env.PUBLIC_URL}/Mohamad_Farhat_Resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                >
              📄 CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
