import { useEffect, useState } from 'react';

export default function Projects() {
  const categories = [
    {
      id: 'web',
      title: 'Web Development',
      desc: 'Full-stack websites and web apps (PHP, JS, React).',
      projects: [
        {
          name: 'Craftify — Online Marketplace for Handmade Goods',
          tech: 'PHP, MySQL, HTML, CSS, JavaScript, Bootstrap, AJAX',
          details:
            'Craftify is a full-stack handmade goods marketplace featuring direct purchasing and real-time auctions. It supports buyers, sellers, and administrators with role-based dashboards, product and auction management, and a responsive user experience built using PHP, MySQL, JavaScript, Bootstrap, and AJAX.',
          links: {
            github: 'https://github.com/yourusername/craftify',
            'Live Demo': 'https://proemployer-unchecked-anabelle.ngrok-free.dev/isd/home.php',
            live: 'https://proemployer-unchecked-anabelle.ngrok-free.dev/isd/home.php',
          },
        },
        // Add more web projects here...
      ],
    },
    {
      id: 'mobile',
      title: 'Mobile',
      desc: 'Mobile apps and prototypes (add your tech here).',
      projects: [
        {
          name: 'Coming Soon',
          tech: '—',
          details:
            'Add your mobile projects here (Android / Flutter / React Native).',
          links: { github: '', live: '' },
        },
      ],
    },
    {
      id: 'database',
      title: 'Database',
      desc: 'Database design, ERD, SQL queries, and optimization.',
      projects: [
        {
          name: 'Craftify Database Design',
          tech: 'MySQL, ERD, Relations',
          details:
            'Designed relational schema for products, users, orders, auctions, and bids with proper constraints and relationships.',
          links: { github: '', live: '' },
        },
      ],
    },
    {
      id: 'ml',
      title: 'Machine Learning',
      desc: 'ML experiments, small models, and data analysis projects.',
      projects: [
        {
          name: 'Coming Soon',
          tech: '—',
          details: 'Add your ML projects here when you have them.',
          links: { github: '', live: '' },
        },
      ],
    },
  ];

  const [selected, setSelected] = useState(null);

  // Close modal with ESC
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  // Lock body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selected]);

  return (
    <section id="projects">
      <h2>Projects</h2>

      {/* Category cards */}
      <div className="grid">
        {categories.map((c) => (
          <div
            key={c.id}
            className="card projectCategoryCard"
            role="button"
            tabIndex={0}
            onClick={() => setSelected(c)}
            onKeyDown={(e) => e.key === 'Enter' && setSelected(c)}
          >
            <h3 className="projectCategoryTitle">{c.title}</h3>
            <p className="projectCategoryDesc">{c.desc}</p>
            <span className="projectCategoryHint">
              Click to view projects →
            </span>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="modalOverlay" onClick={() => setSelected(null)}>
          <div className="modalCard" onClick={(e) => e.stopPropagation()}>
            <div className="modalHeader">
              <div>
                <h3 className="modalTitle">{selected.title}</h3>
                <p className="modalSubtitle">{selected.desc}</p>
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
              {selected.projects.map((p) => (
                <div key={p.name} className="modalProject">
                  <h4 className="modalProjectTitle">{p.name}</h4>
                  <div className="modalProjectTech">{p.tech}</div>

                  <p className="modalProjectDetails">{p.details}</p>

                  <div className="modalLinks">
                    {p.links.github ? (
                      <a href={p.links.github} target="_blank" rel="noreferrer">
                        GitHub
                      </a>
                    ) : null}

                    {p.links.live ? (
                      <a href={p.links.live} target="_blank" rel="noreferrer">
                        Live Demo
                      </a>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
