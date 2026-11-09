import { useMemo, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { isGerman } = useLanguage();

  const emailAddress = 'mohamad-farhat@mail.de';
  const githubUrl = 'https://github.com/Mohamad572001';
  const linkedinUrl = 'https://linkedin.com/in/mohamad-farhat-J2001';

  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(
      form.subject ||
        (isGerman
          ? 'Nachricht über mein Portfolio'
          : 'Message from my portfolio')
    );

    const body = encodeURIComponent(
      `${isGerman ? 'Name' : 'Name'}: ${form.name}
Email: ${form.email}

${isGerman ? 'Nachricht' : 'Message'}:
${form.message}`
    );

    return `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  }, [form, isGerman]);

  const labels = isGerman
    ? {
        eyebrow: 'Kontakt',
        title: 'Kontakt',
        intro:
          'Du möchtest über eine Junior-Stelle, ein Praktikum, ein Traineeprogramm oder ein Projekt sprechen? Kontaktiere mich gerne.',
        name: 'Name',
        email: 'E-Mail',
        subject: 'Betreff',
        message: 'Nachricht',
        send: 'Nachricht vorbereiten',
        success:
          'Dein E-Mail-Programm wurde mit einer vorbereiteten Nachricht geöffnet.',
        error: 'Bitte fülle alle Felder korrekt aus.',
        direct: 'Direkter Kontakt',
        note:
          'Das Formular öffnet dein E-Mail-Programm. Die Nachricht wird nicht automatisch versendet.',
      }
    : {
        eyebrow: 'Contact',
        title: 'Get in touch',
        intro:
          'Interested in discussing a junior position, internship, trainee opportunity or project? Feel free to contact me.',
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        send: 'Prepare message',
        success:
          'Your email application has been opened with a prepared message.',
        error: 'Please complete all fields correctly.',
        direct: 'Direct contact',
        note:
          'This form opens your email application. The message is not sent automatically.',
      };

  const change = (event) => {
    setForm((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));

    if (status) {
      setStatus('');
    }
  };

  const submit = (event) => {
    event.preventDefault();

    const validEmail = /^\S+@\S+\.\S+$/.test(form.email.trim());

    if (
      !form.name.trim() ||
      !validEmail ||
      !form.subject.trim() ||
      !form.message.trim()
    ) {
      setStatus('error');
      return;
    }

    window.location.href = mailto;
    setStatus('success');
  };

  return (
    <section id="contact">
      <div className="sectionHeading">
        <span className="sectionEyebrow">
          {labels.eyebrow}
        </span>

        <h2>{labels.title}</h2>

        <p>{labels.intro}</p>
      </div>

      <div className="card glassCard contactWrap">
        <div className="contactInfo">
          <h3>{labels.direct}</h3>

          <div className="contactLinks">
            <div className="contactRow">
              <span className="contactLabel">Email</span>

              <a
                className="contactLink"
                href={`mailto:${emailAddress}`}
              >
                {emailAddress}
              </a>
            </div>

            <div className="contactRow">
              <span className="contactLabel">GitHub</span>

              <a
                className="contactLink"
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                Mohamad572001
              </a>
            </div>

            <div className="contactRow">
              <span className="contactLabel">
                LinkedIn
              </span>

              <a
                className="contactLink"
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
              >
                Mohamad Farhat
              </a>
            </div>
          </div>

          <p className="contactSmall">
            {labels.note}
          </p>
        </div>

        <form
          className="contactForm"
          onSubmit={submit}
        >
          <div className="formRow">
            <div className="field">
              <label htmlFor="name">
                {labels.name}
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={change}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="email">
                {labels.email}
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={change}
                required
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="subject">
              {labels.subject}
            </label>

            <input
              id="subject"
              name="subject"
              type="text"
              value={form.subject}
              onChange={change}
              required
            />
          </div>

          <div className="field">
            <label htmlFor="message">
              {labels.message}
            </label>

            <textarea
              id="message"
              name="message"
              rows="6"
              value={form.message}
              onChange={change}
              required
            />
          </div>

          <button
            className="btn primary"
            type="submit"
          >
            {labels.send}
          </button>

          {status === 'success' && (
            <p className="formStatus success">
              {labels.success}
            </p>
          )}

          {status === 'error' && (
            <p className="formStatus error">
              {labels.error}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}