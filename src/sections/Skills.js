import { useLanguage } from '../context/LanguageContext';

export default function Skills() {
  const { isGerman } = useLanguage();

  const groups = isGerman
    ? [
        [
          'Webentwicklung',
          ['HTML', 'CSS', 'JavaScript', 'PHP', 'Bootstrap', 'AJAX'],
        ],
        [
          'Datenbanken',
          ['MySQL', 'SQL', 'Relationale Datenmodellierung'],
        ],
        [
          'Entwicklungsumgebungen',
          ['Visual Studio Code', 'Visual Studio', 'XAMPP', 'GitHub'],
        ],
        [
          'Softwaretesting · Selbststudium',
          [
            'Testfallentwurf',
            'Äquivalenzklassenbildung',
            'Grenzwertanalyse',
            'Entscheidungstabellentest',
            'Reviews',
            'Fehleranalyse',
            'Regressionstests',
          ],
        ],
        [
          'Weitere Kenntnisse',
          ['React.js · Grundkenntnisse', '.NET · Grundkenntnisse'],
        ],
      ]
    : [
        [
          'Web Development',
          ['HTML', 'CSS', 'JavaScript', 'PHP', 'Bootstrap', 'AJAX'],
        ],
        [
          'Databases',
          ['MySQL', 'SQL', 'Relational data modelling'],
        ],
        [
          'Development Environments',
          ['Visual Studio Code', 'Visual Studio', 'XAMPP', 'GitHub'],
        ],
        [
          'Software Testing · Self-study',
          [
            'Test case design',
            'Equivalence partitioning',
            'Boundary value analysis',
            'Decision table testing',
            'Reviews',
            'Defect analysis',
            'Regression testing',
          ],
        ],
        [
          'Additional Exposure',
          ['React.js · Basic exposure', '.NET · Basic exposure'],
        ],
      ];

  return (
    <section id="skills">
      <div className="sectionHeading">
        <span className="sectionEyebrow">
          {isGerman ? 'Technische Kompetenzen' : 'Technical Competencies'}
        </span>

        <h2>
          {isGerman ? 'Technische Kenntnisse' : 'Technical Skills'}
        </h2>

        <p>
          {isGerman
            ? 'Technische Kenntnisse entsprechend meinem aktuellen Lebenslauf und meiner praktischen Erfahrung.'
            : 'Technical skills aligned with my current CV and practical experience.'}
        </p>
      </div>

      <div className="skillsGridUpdated">
        {groups.map(([title, items]) => (
          <article className="card skillGroupCard" key={title}>
            <h3>{title}</h3>

            <div className="tags">
              {items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}