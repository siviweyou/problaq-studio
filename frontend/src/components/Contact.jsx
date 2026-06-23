import { useState } from 'react'
import { api } from '../services/api.js'

const whatsappUrl = 'https://wa.me/27768569423?text=Hi%20Problaq%20Studio%2C%20I%27d%20like%20to%20discuss%20a%20website%20or%20web%20app%20project.%20Please%20can%20we%20chat%3F'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    try {
      const json = await api.post('/api/contact', form)
      if (!json.success) throw new Error(json.message || 'Something went wrong.')
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setStatus('error')
      setErrorMsg(err.message)
    }
  }

  const isFormValid = form.name && form.email && form.subject && form.message

  return (
    <section id="contact" className="contact-section">
      <div className="contact-orb" />
      <p className="contact-pre">// Let's build something together</p>
      <h2 className="contact-title">
        Got a project<br />in <em>mind?</em>
      </h2>
      <a
        href="mailto:hello@por.problaq.co.za"
        className="contact-email"
        style={{
          display: 'inline-block',
          marginTop: '3rem',
          fontFamily: "'Playfair Display',serif",
          fontSize: '1.5rem',
          color: 'var(--accent)',
          textDecoration: 'none',
          borderBottom: '1px solid rgba(37,99,235,0.35)',
          paddingBottom: '0.25rem',
        }}
      >
        hello@por.problaq.co.za
      </a>

      <form
        className="contact-form"
        onSubmit={handleSubmit}
        style={{
          maxWidth: '520px',
          margin: '2rem auto 0',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          textAlign: 'left',
        }}
      >
        {[
          { label: 'Name', name: 'name', type: 'text' },
          { label: 'Email', name: 'email', type: 'email' },
          { label: 'Subject', name: 'subject', type: 'text' },
        ].map((field) => (
          <div key={field.name} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <label htmlFor={field.name} style={{ fontSize: '0.55rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)' }}>{field.label}</label>
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              value={form[field.name]}
              onChange={handleChange}
              required
              style={{
                background: 'transparent',
                border: '1px solid var(--border-bright)',
                color: 'var(--white)',
                padding: '0.75rem',
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: '0.65rem',
                outline: 'none',
                transition: 'border-color 0.2s',
              }}
              onFocus={(e) => { e.target.style.borderColor = 'var(--accent)' }}
              onBlur={(e) => { e.target.style.borderColor = 'var(--border-bright)' }}
            />
          </div>
        ))}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <label htmlFor="message" style={{ fontSize: '0.55rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)' }}>Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
            style={{
              background: 'transparent',
              border: '1px solid var(--border-bright)',
              color: 'var(--white)',
              padding: '0.75rem',
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: '0.65rem',
              resize: 'vertical',
              outline: 'none',
              transition: 'border-color 0.2s',
            }}
            onFocus={(e) => { e.target.style.borderColor = 'var(--accent)' }}
            onBlur={(e) => { e.target.style.borderColor = 'var(--border-bright)' }}
          />
        </div>

        <button
          type="submit"
          disabled={!isFormValid || status === 'sending'}
          style={{
            padding: '0.85rem 2rem',
            background: isFormValid && status !== 'sending' ? 'var(--accent)' : 'rgba(37,99,235,0.35)',
            color: 'white',
            border: 'none',
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: '0.65rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            cursor: isFormValid && status !== 'sending' ? 'pointer' : 'default',
            transition: 'background 0.25s',
            marginTop: '0.5rem',
          }}
        >
          {status === 'sending' ? 'Sending…' : status === 'success' ? '✓ Message Sent!' : 'Send Message →'}
        </button>

        {status === 'success' && (
          <p style={{ fontSize: '0.6rem', color: '#4ade80', textAlign: 'center' }}>
            We received your message — we'll be in touch shortly.
          </p>
        )}
        {status === 'error' && (
          <p style={{ fontSize: '0.6rem', color: '#f87171', textAlign: 'center' }}>
            {errorMsg || 'Something went wrong. Please try again.'}
          </p>
        )}
      </form>

      <div className="contact-socials">
        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="c-soc">WhatsApp</a>
      </div>
    </section>
  )
}
