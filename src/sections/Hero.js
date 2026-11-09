import profileImg from '../assets/profile.jpeg';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { isGerman } = useLanguage();
  const copy = isGerman ? {
    eyebrow: 'Informatik-Absolvent · Softwaretesting & Webentwicklung',
    intro: 'Ich bin',
    title: 'Mohamad Farhat',
    body: 'Informatik-Absolvent mit einem durch die ZAB auf deutscher Bachelor-Ebene bewerteten Hochschulabschluss. Ich bringe praktische Projekterfahrung in der Full-Stack-Webentwicklung und Erfahrung aus einem Softwareentwicklungspraktikum mit. Derzeit bereite ich mich eigenständig auf die ISTQB-CTFL-Zertifizierungsprüfung vor.',
    contact: 'Kontakt', projects: 'Projekte ansehen', cv: 'Lebenslauf herunterladen',
    stack: 'Technologie-Schwerpunkte',
  } : {
    eyebrow: 'Computer Science Graduate · Software Testing & Web Development',
    intro: "I'm", title: 'Mohamad Farhat',
    body: "Computer Science graduate with a bachelor's degree evaluated by the ZAB at German bachelor's level. I have hands-on experience from a full-stack web development project and a software development internship. I am currently preparing independently for the ISTQB CTFL certification exam.",
    contact: 'Contact me', projects: 'View projects', cv: 'Download CV', stack: 'Core technologies',
  };
  return (
    <section className="hero heroUpdated" id="top">
      <div className="heroCopy">
        <span className="badge">{copy.eyebrow}</span>
        <p className="heroIntro">{copy.intro}</p>
        <h1><span className="accent">{copy.title}</span></h1>
        <p className="subtitle heroLead">{copy.body}</p>
        <div className="buttons heroButtons">
          <a href="#contact" className="btn primary">{copy.contact}</a>
          <a href="#projects" className="btn">{copy.projects}</a>
          <a href={`${process.env.PUBLIC_URL}/Mohamad_Farhat_Resume_2026-11-09.pdf`} className="btn btn-secondary" target="_blank" rel="noreferrer">{copy.cv}</a>
        </div>
        <div className="card techStackCard">
          <h3>{copy.stack}</h3>
          <div className="tags">
            {['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'SQL', 'Bootstrap', 'AJAX', 'GitHub', 'Visual Studio Code'].map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </div>
      <div className="heroRight">
        <div className="avatarWrap"><div className="avatarInner"><img className="avatar" src={profileImg} alt="Mohamad Farhat" /></div></div>
        <p className="heroLocation">
  {isGerman ? 'Duisburg, Deutschland' : 'Duisburg, Germany'}
</p>
        <div className="heroSocials">
          <a href="https://github.com/Mohamad572001" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/mohamad-farhat-J2001" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
