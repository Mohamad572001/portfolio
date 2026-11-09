import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { isGerman } = useLanguage();

  return (
    <footer className="footer">
      <p>
        © 2026 Mohamad Farhat ·{' '}
        {isGerman
          ? 'Informatik-Absolvent · Softwaretesting & Webentwicklung'
          : 'Computer Science Graduate · Software Testing & Web Development'}
      </p>
    </footer>
  );
}