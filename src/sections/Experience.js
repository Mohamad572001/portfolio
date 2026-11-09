import { useLanguage } from '../context/LanguageContext';

export default function Experience() {
  const { isGerman } = useLanguage();

  return (
    <section id="experience">
      <div className="sectionHeading">
        <span className="sectionEyebrow">
          {isGerman ? 'Berufliche Praxis' : 'Professional Practice'}
        </span>

        <h2>
          {isGerman ? 'Erfahrung' : 'Experience'}
        </h2>
      </div>

      <article className="card experienceCard">
        <div className="experienceTop">
          <div>
            <h3>
              {isGerman
                ? 'Praktikum Softwareentwicklung'
                : 'Software Development Intern'}
            </h3>

            <p className="experienceCompany">
              Integrated Digital System (IDS) · Beirut
            </p>
          </div>

          <span className="datePill">
            02/2026 – 03/2026
          </span>
        </div>

        <ul className="experienceList">
          <li>
            {isGerman
              ? 'Praktische Einblicke in die Softwareentwicklung mit .NET sowie in Datenbanken und SQL.'
              : 'Gained practical insight into software development using .NET, databases and SQL.'}
          </li>

          <li>
            {isGerman
              ? 'Beschäftigung mit Grundlagen der Frontend-Entwicklung mit React.js.'
              : 'Explored frontend development fundamentals with React.js.'}
          </li>

          <li>
            {isGerman
              ? 'Arbeit mit Visual Studio, Visual Studio Code und XAMPP.'
              : 'Worked with Visual Studio, Visual Studio Code and XAMPP.'}
          </li>
        </ul>
      </article>
    </section>
  );
}