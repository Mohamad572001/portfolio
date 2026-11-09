import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

import tz1 from '../assets/Timezone1.png';
import tz2 from '../assets/Timezone2.png';

export default function Projects() {
  const { isGerman } = useLanguage();
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelected(null);
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selected]);

  const projects = [
    {
      id: 'craftify',
      name: 'Craftify',

      subtitle: isGerman
        ? 'Full-Stack-Marktplatz für handgefertigte Produkte mit Auktionssystem'
        : 'Full-stack marketplace for handmade products with an auction system',

      shortDescription: isGerman
        ? 'Eigenständig konzipiertes und entwickeltes Bachelor-Abschlussprojekt mit Käufer-, Verkäufer- und Administratorfunktionen.'
        : 'Independently designed and developed bachelor capstone project with buyer, seller and administrator functionality.',

      technologies: [
        'HTML',
        'CSS',
        'JavaScript',
        'PHP',
        'MySQL',
        'Bootstrap',
        'AJAX',
      ],

      content: {
        introduction: isGerman
          ? 'Craftify wurde von mir eigenständig als Bachelor-Abschlussprojekt konzipiert und entwickelt. Die Anwendung ist ein rollenbasierter Online-Marktplatz für handgefertigte Produkte und unterstützt Käufer, Verkäufer und Administratoren.'
          : 'Craftify was independently designed and developed by me as my bachelor capstone project. The application is a role-based online marketplace for handmade products supporting buyers, sellers and administrators.',

        contributionTitle: isGerman
          ? 'Mein Beitrag'
          : 'My contribution',

        contribution: isGerman
          ? 'Konzeption, Anforderungsanalyse, Datenbankmodellierung, Frontend, Backend-Logik und Projektdokumentation.'
          : 'Concept, requirements analysis, database design, frontend development, backend logic and project documentation.',

        featuresTitle: isGerman
          ? 'Kernfunktionen'
          : 'Core features',

        features: isGerman
          ? [
              'Rollenbasierte Registrierung und Anmeldung für Käufer, Verkäufer und Administratoren',
              'Produktkatalog mit Suche, Kategorien und Wunschliste',
              'Warenkorb, Checkout und Bestellverwaltung',
              'Auktionssystem mit Gebotsabgabe und Validierung höherer Gebote',
              'Anzeige der verbleibenden Auktionszeit',
              'Benachrichtigungen bei Überbietung und Auktionsgewinn',
            ]
          : [
              'Role-based registration and authentication for buyers, sellers and administrators',
              'Product catalogue with search, categories and wishlist',
              'Cart, checkout and order management',
              'Auction bidding with validation of higher bids',
              'Remaining auction time display',
              'Notifications for outbid users and auction winners',
            ],

        technicalTitle: isGerman
          ? 'Technische Konzeption'
          : 'Technical design',

        technical: isGerman
          ? [
              'Frontend mit HTML, CSS, JavaScript und Bootstrap',
              'Backend-Logik mit PHP',
              'Relationale Datenhaltung und Datenbankmodellierung mit MySQL',
              'Dynamische Funktionen mit AJAX',
              'UML-Anwendungsfälle, ER-Diagramm und relationales Datenmodell',
            ]
          : [
              'Frontend built with HTML, CSS, JavaScript and Bootstrap',
              'Backend logic implemented with PHP',
              'Relational database design and data storage with MySQL',
              'Dynamic functionality using AJAX',
              'UML use cases, ER diagram and relational data model',
            ],

        testingTitle: isGerman
          ? 'Test- und Qualitätsaspekte'
          : 'Testing & quality aspects',

        testing: isGerman
          ? [
              'Validierung von Benutzerrollen und Zugriffsrechten',
              'Prüfung von Gebotsregeln und höheren Auktionsgeboten',
              'Überprüfung zentraler Kauf-, Checkout- und Bestellabläufe',
              'Berücksichtigung funktionaler und nicht funktionaler Anforderungen',
            ]
          : [
              'Validation of user roles and access rights',
              'Validation of auction bidding rules and higher bids',
              'Review of key purchase, checkout and order workflows',
              'Consideration of functional and non-functional requirements',
            ],

        documentation: isGerman
          ? 'Dokumentation: 55-seitiger Projektbericht mit Anforderungen, Systementwurf, Datenmodell und Implementierungsbeschreibung.'
          : 'Documentation: 55-page project report covering requirements, system design, data modelling and implementation.',
      },
    },

    {
      id: 'timezone',
      name: 'TimeZone Tracker',

      subtitle: isGerman
        ? 'Mobile Anwendung mit Flutter und PHP'
        : 'Mobile application built with Flutter and PHP',

      shortDescription: isGerman
        ? 'Mobile Anwendung zur Anzeige von Datum und Uhrzeit für ausgewählte Städte.'
        : 'Mobile application for displaying the current date and time for selected cities.',

      technologies: ['Flutter', 'Dart', 'PHP', 'REST API'],

      images: [
        {
          src: tz1,
          alt: 'TimeZone Tracker city selection',
        },
        {
          src: tz2,
          alt: 'TimeZone Tracker Berlin screen',
        },
      ],

      content: {
        introduction: isGerman
          ? 'TimeZone Tracker ist eine mobile Anwendung, die Datum und Uhrzeit für ausgewählte Städte anzeigt. Die Benutzeroberfläche wurde mit Flutter umgesetzt, während PHP für Backend- und API-Funktionen verwendet wurde.'
          : 'TimeZone Tracker is a mobile application that displays the current date and time for selected cities. The user interface was built with Flutter, while PHP was used for backend and API functionality.',

        featuresTitle: isGerman
          ? 'Funktionen'
          : 'Features',

        features: isGerman
          ? [
              'Auswahl einer Stadt über ein Dropdown-Menü',
              'Anzeige von aktuellem Datum und aktueller Uhrzeit',
              'Stadtbezogene Darstellung mit Bild',
            ]
          : [
              'City selection through a dropdown menu',
              'Display of current date and time',
              'City-specific display with image',
            ],
      },
    },
  ];

  const active = selected
    ? projects.find((project) => project.id === selected)
    : null;

  return (
    <section id="projects">
      <div className="sectionHeading">
        <span className="sectionEyebrow">
          {isGerman ? 'Ausgewählte Arbeit' : 'Selected Work'}
        </span>

        <h2>
          {isGerman ? 'Projekte' : 'Projects'}
        </h2>

        <p>
          {isGerman
            ? 'Praktische Projekte aus Webentwicklung, Datenbanken und Softwareentwicklung.'
            : 'Practical projects in web development, databases and software development.'}
        </p>
      </div>

      <div className="projectShowcaseGrid">
        {projects.map((project, index) => (
          <article
            key={project.id}
            className="card projectShowcaseCard"
          >
            <span className="projectNumber">
              {String(index + 1).padStart(2, '0')}
            </span>

            <h3>{project.name}</h3>

            <p>{project.subtitle}</p>

            <div className="tags">
              {project.technologies.map((technology) => (
                <span key={technology}>
                  {technology}
                </span>
              ))}
            </div>

            <button
              type="button"
              className="projectExploreBtn"
              onClick={() => setSelected(project.id)}
            >
              {isGerman
                ? 'Projekt ansehen →'
                : 'Explore project →'}
            </button>
          </article>
        ))}
      </div>

      {active && (
        <div
          className="modalOverlay"
          onClick={() => setSelected(null)}
        >
          <div
            className="modalCard projectCaseStudy"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="modalHeader">
              <div>
                <h3 className="modalTitle">
                  {active.name}
                </h3>

                <p className="modalSubtitle">
                  {active.subtitle}
                </p>
              </div>

              <button
                className="modalCloseBtn"
                type="button"
                aria-label="Close modal"
                onClick={() => setSelected(null)}
              >
                ✕
              </button>
            </div>

            <div className="modalBody">
              <p className="modalProjectDetails">
                {active.content.introduction}
              </p>

              {active.content.contribution && (
                <div className="projectDetailSection">
                  <h4>
                    {active.content.contributionTitle}
                  </h4>

                  <p>
                    {active.content.contribution}
                  </p>
                </div>
              )}

              {active.content.features && (
                <div className="projectDetailSection">
                  <h4>
                    {active.content.featuresTitle}
                  </h4>

                  <ul>
                    {active.content.features.map((item) => (
                      <li key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {active.content.technical && (
                <div className="projectDetailSection">
                  <h4>
                    {active.content.technicalTitle}
                  </h4>

                  <ul>
                    {active.content.technical.map((item) => (
                      <li key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {active.content.testing && (
                <div className="projectDetailSection">
                  <h4>
                    {active.content.testingTitle}
                  </h4>

                  <ul>
                    {active.content.testing.map((item) => (
                      <li key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {active.content.documentation && (
                <div className="projectDetailSection">
                  <h4>
                    {isGerman
                      ? 'Dokumentation'
                      : 'Documentation'}
                  </h4>

                  <p>
                    {active.content.documentation}
                  </p>
                </div>
              )}

              {active.images?.length > 0 && (
                <div className="projectGallery">
                  {active.images.map((image) => (
                    <a
                      key={image.alt}
                      href={image.src}
                      target="_blank"
                      rel="noreferrer"
                      className="projectShot"
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                      />
                    </a>
                  ))}
                </div>
              )}

              <div className="projectTechnologyBlock">
                <strong>
                  {isGerman
                    ? 'Technologien:'
                    : 'Technologies:'}
                </strong>

                <div className="tags">
                  {active.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}