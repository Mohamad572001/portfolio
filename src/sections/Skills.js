export default function Skills() {
  return (
    <section id="skills">
      <h2>Technical Skills</h2>

      <div className="grid">
        <div className="card">
          <h4>Frontend</h4>
          <Skill name="HTML" percent={85} icon="devicon-html5-plain" />
          <Skill name="CSS" percent={70} icon="devicon-css3-plain" />
          <Skill name="JavaScript" percent={75} icon="devicon-javascript-plain" />
          <Skill name="React" percent={60} icon="devicon-react-original" />
          <Skill name="Bootstrap (Basic)" percent={55} icon="devicon-bootstrap-plain" />
          <Skill name="AJAX (Basic)" percent={55} icon="devicon-jquery-plain" />
        </div>

        <div className="card">
          <h4>Backend</h4>
          <Skill name="PHP" percent={70} icon="devicon-php-plain" />
          <Skill name="Node.js" percent={60} icon="devicon-nodejs-plain" />
        </div>

        <div className="card">
          <h4>Programming Languages</h4>
          <Skill name="Java" percent={70} icon="devicon-java-plain" />
          <Skill name="Python" percent={70} icon="devicon-python-plain" />
          <Skill name="C#" percent={55} icon="devicon-csharp-plain" />
          <Skill name="Flutter (Dart)" percent={60} icon="devicon-flutter-plain" />
        </div>

        <div className="card">
          <h4>Tools & Environment</h4>
          <Skill name="MySQL / phpMyAdmin" percent={75} icon="devicon-mysql-plain" />
          <Skill name="XAMPP" percent={80} icon="devicon-apache-plain" />
          <Skill name="VS Code" percent={85} icon="devicon-vscode-plain" />
          <Skill name="NetBeans (Java)" percent={65} icon="devicon-apache-plain" />
        </div>
      </div>
    </section>
  );
}

function Skill({ name, percent, icon }) {
  return (
    <div className="skill">
      <div className="skill-header">
        <div className="skill-left">
          <i className={`skill-icon ${icon}`} aria-hidden="true"></i>
          <span>{name}</span>
        </div>
        <span>{percent}%</span>
      </div>

      <div className="progress-bar">
        <div className="progress" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}


