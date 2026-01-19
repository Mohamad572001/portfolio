export default function Skills() {
  return (
    <section id="skills">
      <h2>Technical Skills</h2>

      <div className="grid">

        {/* Frontend */}
        <div className="card">
          <h4>Frontend</h4>
          <Skill name="HTML" percent={85} />
          <Skill name="CSS" percent={70} />
          <Skill name="JavaScript" percent={75} />
          <Skill name="React" percent={60} />
          <Skill name="Bootstrap (Basic)" percent={55} />
          <Skill name="AJAX (Basic)" percent={55} />
        </div>

        {/* Backend */}
        <div className="card">
          <h4>Backend</h4>
          <Skill name="PHP" percent={70} />
          <Skill name="Node.js" percent={60} />
        </div>

        {/* Programming Languages */}
        <div className="card">
          <h4>Programming Languages</h4>
          <Skill name="Java" percent={70} />
          <Skill name="Python" percent={70} />
          <Skill name="C#" percent={55} />
          <Skill name="Flutter (Dart)" percent={60} />
        </div>

        {/* Tools */}
        <div className="card">
          <h4>Tools & Environment</h4>
          <Skill name="MySQL / phpMyAdmin" percent={75} />
          <Skill name="XAMPP" percent={80} />
          <Skill name="VS Code" percent={85} />
          <Skill name="NetBeans (Java)" percent={65} />
        </div>

      </div>
    </section>
  );
}

/* Skill Component */
function Skill({ name, percent }) {
  return (
    <div className="skill">
      <div className="skill-header">
        <span>{name}</span>
        <span>{percent}%</span>
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${percent}%` }}></div>
      </div>
    </div>
  );
}

