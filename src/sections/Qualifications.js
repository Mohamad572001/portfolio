import { useLanguage } from '../context/LanguageContext';

export default function Qualifications() {
  const { isGerman } = useLanguage();

  return (
    <section id="qualifications">
      <div className="sectionHeading">
        <span className="sectionEyebrow">
          {isGerman ? 'Ausbildung & Weiterbildung' : 'Education & Qualifications'}
        </span>

        <h2>
          {isGerman ? 'Ausbildung & Qualifikationen' : 'Education & Qualifications'}
        </h2>
      </div>

      <div className="qualificationGrid">

        {/* Bachelor */}
        <article className="card qualificationCard">
          <span className="datePill">10/2020 – 02/2026</span>

          <h3>
            {isGerman
              ? 'Bachelor of Science – Computer Science'
              : 'Bachelor of Science – Computer Science'}
          </h3>

          <p className="qualificationInstitution">
            Lebanese International University
          </p>

          <p>
            {isGerman
              ? 'ZAB-Zeugnisbewertung vom 06.11.2026: Der Abschluss entspricht einem deutschen Hochschulabschluss auf Bachelor-Ebene.'
              : 'ZAB Statement of Comparability dated 6 November 2026: the qualification corresponds to a German higher education qualification at bachelor level.'}
          </p>
        </article>

        {/* ISTQB */}
        <article className="card qualificationCard">
          <span className="datePill">10/2026 – 11/2026</span>

          <h3>
            {isGerman
              ? 'ISTQB® CTFL – Prüfungsvorbereitung'
              : 'ISTQB® CTFL Preparation'}
          </h3>

          <p className="qualificationInstitution">
            {isGerman
              ? 'Selbststudium · Lehrplan 4.0.2'
              : 'Independent self-study · Syllabus 4.0.2'}
          </p>

          <p>
            {isGerman
              ? 'Eigenständige Vorbereitung anhand des offiziellen deutschsprachigen ISTQB-Lehrplans, Version 4.0.2 (2025), weit fortgeschritten. Zertifizierungsprüfung noch nicht abgelegt.'
              : 'Independent preparation based on the official German-language ISTQB syllabus, Version 4.0.2 (2025), currently well advanced. Certification exam planned; not yet completed.'}
          </p>

          <div className="tags">
            <span>
              {isGerman ? 'Grundlagen des Testens' : 'Testing fundamentals'}
            </span>
            <span>SDLC</span>
            <span>{isGerman ? 'Reviews' : 'Reviews'}</span>
            <span>
              {isGerman
                ? 'Black-Box & White-Box'
                : 'Black-box & white-box'}
            </span>
            <span>
              {isGerman ? 'Testmanagement' : 'Test management'}
            </span>
          </div>
        </article>

        {/* School */}
        <article className="card qualificationCard">
          <span className="datePill">07/2020</span>

          <h3>
            {isGerman
              ? 'Allgemeine Hochschulreife'
              : 'General Secondary Education'}
          </h3>

          <p className="qualificationInstitution">
            Ankoun High School · {isGerman ? 'Libanon' : 'Lebanon'}
          </p>
        </article>

      </div>
    </section>
  );
}