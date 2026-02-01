// src/sections/Contact.js
import { useMemo, useState } from 'react';

export default function Contact() {
  const myEmail = 'mohamadfarhat05.07.01@gmail.com';
  const githubUrl = 'https://github.com/Mohamad572001';
  const linkedinUrl = 'https://linkedin.com/in/mohamad-farhat-j2001';

  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({ type: '', msg: '' });
  const [loading, setLoading] = useState(false);

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(form.subject || 'Portfolio message');
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    return `mailto:${myEmail}?subject=${subject}&body=${body}`;
  }, [form, myEmail]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (status.msg) setStatus({ type: '', msg: '' });
  };

  const validate = () => {
    if (!form.name.trim()) return 'Please enter your name.';
    if (!form.email.trim()) return 'Please enter your email.';
    // simple email validation
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim()))
      return 'Please enter a valid email address.';
    if (!form.subject.trim()) return 'Please enter a subject.';
    if (!form.message.trim()) return 'Please write your message.';
    if (form.message.trim().length < 15)
      return 'Message is too short (min 15 characters).';
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setStatus({ type: 'error', msg: err });
      return;
    }

    // Professional + zero-backend default:
    // open user's email client with a prefilled email
    setLoading(true);
    try {
      window.open(mailtoHref, '_blank', 'noopener,noreferrer');
      setStatus({
        type: 'success',
        msg: 'Your email app opened with the message ready. Send it and I’ll reply soon.',
      });

      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus({
        type: 'error',
        msg: 'Could not open your email app. Please email me directly.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact">
      <h2>Contact</h2>

      <div className="card glassCard contactWrap">
        {/* Left: info */}
        <div className="contactInfo">
          <h3 className="contactTitle">Let’s work together</h3>
          <p className="contactText">
            Have a question or want to collaborate? Send me a message and I’ll
            get back to you as soon as possible.
          </p>

          <div className="contactLinks">
            <div className="contactRow">
              <span className="contactLabel">Email</span>
              <a className="contactLink" href={`mailto:${myEmail}`}>
                {myEmail}
              </a>
            </div>

            <div className="contactRow">
              <span className="contactLabel">GitHub</span>
              <a
                className="contactLink"
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Mohamad572001
              </a>
            </div>

            {/* Optional: add LinkedIn later by replacing '#' with your URL */}
            <div className="contactRow">
              <span className="contactLabel">LinkedIn</span>
              <a
                className="contactLink"
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Mohamad Farhat
              </a>
            </div>
          </div>

          <div className="contactNote">
            <p className="contactSmall">
              Prefer email? Just click my address above.
            </p>
          </div>
        </div>

        {/* Right: form */}
        <form className="contactForm" onSubmit={handleSubmit}>
          <div className="formRow">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={onChange}
                autoComplete="name"
                required
              />
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@email.com"
                value={form.email}
                onChange={onChange}
                autoComplete="email"
                required
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="What is this about?"
              value={form.subject}
              onChange={onChange}
              required
            />
          </div>

          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Write your message..."
              value={form.message}
              onChange={onChange}
              required
            />
          </div>

          <button className="btn primary" type="submit" disabled={loading}>
            {loading ? 'Opening Email…' : 'Send Message'}
          </button>

          {status.msg && (
            <p
              className={`formStatus ${status.type}`}
              role="status"
              aria-live="polite"
            >
              {status.msg}
            </p>
          )}

          <p className="contactSmall">
            Note: This form opens your email app with the message pre-filled.
            If you want “real sending” directly from the website, tell me and
            I’ll set up EmailJS or Formspree.
          </p>
        </form>
      </div>
    </section>
  );
}

