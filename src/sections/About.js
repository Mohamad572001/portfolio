import profileImg from '../assets/profile.jpeg';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { isGerman } = useLanguage();

  return (
    <section id="about">
      <div className="sectionHeading">
        <span className="sectionEyebrow">
          {isGerman ? 'Über mich' : 'About Me'}
        </span>

        <h2>
          {isGerman ? 'Über mich' : 'About Me'}
        </h2>
      </div>

      <div className="aboutWrap card glassCard">

        {/* LEFT: professional image */}
        <div className="aboutImgWrap">
          <img
            className="aboutImg"
            src={profileImg}
            alt="Mohamad Farhat"
          />
        </div>

        {/* RIGHT: content */}
        <div className="aboutContent">

          <h3 className="aboutTitle">
            {isGerman
              ? 'Informatik-Absolvent mit Schwerpunkt Softwaretesting und Webentwicklung'
              : 'Computer Science Graduate focused on Software Testing and Web Development'}
          </h3>

          <p className="aboutText">
            {isGerman
              ? 'Mein fachlicher Schwerpunkt liegt an der Schnittstelle von Webentwicklung und Softwarequalität. Im Rahmen meines Bachelorprojekts Craftify habe ich eigenständig einen Full-Stack-Online-Marktplatz mit Funktionen für Käufer, Verkäufer und Administratoren konzipiert und entwickelt. Zusätzlich konnte ich während meines Softwareentwicklungspraktikums bei Integrated Digital System (IDS) praktische Einblicke in .NET, Datenbanken, SQL und React.js gewinnen. Derzeit vertiefe ich meine Kenntnisse im Softwaretesting durch die eigenständige Vorbereitung auf die ISTQB-CTFL-Zertifizierungsprüfung.'
              : 'My professional focus lies at the intersection of web development and software quality. For my bachelor project, Craftify, I independently designed and developed a full-stack online marketplace with functionality for buyers, sellers and administrators. I also gained practical insight into .NET, databases, SQL and React.js during my software development internship at Integrated Digital System (IDS). I am currently deepening my software testing knowledge through independent preparation for the ISTQB CTFL certification exam.'}
          </p>

          <div className="aboutHighlights">
            <span className="aboutPill">Computer Science</span>
            <span className="aboutPill">PHP & MySQL</span>
            <span className="aboutPill">JavaScript</span>
            <span className="aboutPill">
              {isGerman ? 'Softwaretesting' : 'Software Testing'}
            </span>
          </div>

          <div className="aboutActions">
            <a className="btn primary" href="#contact">
              {isGerman ? 'Kontakt' : 'Get in touch'}
            </a>

            <a
              className="btn"
              href={`${process.env.PUBLIC_URL}/Mohamad_Farhat_Resume_2026-11-09.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {isGerman ? 'Lebenslauf herunterladen' : 'Download CV'}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}