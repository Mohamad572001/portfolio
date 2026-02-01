import profileImg from '../assets/profile.jpeg';

export default function Hero() {
  return (
    <section className="hero" id="top">
      {/* LEFT */}
      <div>
        <span className="badge">🚀 Full Stack Developer</span>
        <h1>
          Hi, I’m <span className="accent">Mohamad Farhat</span>
        </h1>

        <p className="subtitle">
          Full Stack Developer specializing in HTML, CSS, JavaScript, and PHP. I
          have beginner experience with React and Node.js and enjoy building
          real-world applications with clean, practical solutions.
        </p>

        <div className="buttons">
          <a href="#contact" className="btn primary">
            Contact Me
          </a>
          <a href="#projects" className="btn">
            View Projects
          </a>
          <a
            href="https://github.com/Mohamad572001"
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>

        {/* ✅ MOVE TECH STACK HERE (under buttons) */}
        <div className="card techStackCard">
          <h3>Tech Stack</h3>
          <div className="tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>PHP</span>
            <span>MySQL</span>
            <span>Bootstrap</span>
            <span>AJAX</span>
            <span>Java</span>
            <span>Flutter(Basic)</span>
            <span>React (Basic)</span>
            <span>Node.js (Basic)</span>
          </div>
        </div>
      </div>

      {/* RIGHT: Avatar only */}
      <div className="heroRight">
        <div className="avatarWrap">
          <div className="avatarInner">
          <img className="avatar" src={profileImg} alt="Mohamad Farhat" />
          </div>
        </div>
      </div>
    </section>
  );
}
