import { useEffect, useMemo, useState } from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState("projects");

  const sections = useMemo(
    () => [
      { id: "projects", label: "Projects" },
      { id: "skills", label: "Skills" },
      { id: "about", label: "About" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  // Active link highlight on scroll (scroll spy)
  useEffect(() => {
    const getActiveSection = () => {
      const offset = 110; // header height offset
      let current = sections[0]?.id || "projects";

      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (!el) continue;

        const top = el.getBoundingClientRect().top;
        if (top - offset <= 0) current = s.id;
      }

      setActive(current);
    };

    getActiveSection();
    window.addEventListener("scroll", getActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", getActiveSection);
  }, [sections]);

  // Close menu on escape
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const goTo = (id) => {
    setIsMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <header className="header stickyBlur">
        <div className="container nav">
          {/* LEFT */}
          <div
            className="brand"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            role="button"
            tabIndex={0}
          >
            Portfolio.
          </div>

          {/* CENTER (desktop) */}
          <nav className="nav-center" aria-label="Primary">
            {sections.map((s) => (
              <button
                key={s.id}
                className={`navLink ${active === s.id ? "active" : ""}`}
                onClick={() => goTo(s.id)}
                type="button"
              >
                {s.label}
              </button>
            ))}
          </nav>

          {/* RIGHT */}
          <div className="nav-right">
            <div className="social desktopOnly" aria-label="Social links">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://facebook.com/yourusername"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="iconBtn mobileOnly"
              type="button"
              aria-label="Open menu"
              onClick={() => setIsMenuOpen(true)}
            >
              <FiMenu />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay + slide-in drawer */}
      <div
        className={`menuOverlay ${isMenuOpen ? "show" : ""}`}
        onClick={() => setIsMenuOpen(false)}
      />

      <aside className={`mobileMenu ${isMenuOpen ? "open" : ""}`} aria-hidden={!isMenuOpen}>
        <div className="mobileMenuTop">
          <div className="brand">Portfolio.</div>

          <button
            className="iconBtn"
            type="button"
            aria-label="Close menu"
            onClick={() => setIsMenuOpen(false)}
          >
            <FiX />
          </button>
        </div>

        <div className="mobileMenuLinks">
          {sections.map((s) => (
            <button
              key={s.id}
              className={`mobileLink ${active === s.id ? "active" : ""}`}
              onClick={() => goTo(s.id)}
              type="button"
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="mobileMenuFooter">
          <div className="social" aria-label="Social links">
            <a
              href="https://github.com/Mohamad572001"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/Mohamad Farhat"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com/mohamad.h.farhat2001"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com/mohamad.h.farhat_"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
