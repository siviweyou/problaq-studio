import { useState } from 'react'
import { api } from '../services/api'

export default function EmailCampaign() {
  const [emails, setEmails] = useState('')
  const [senderEmail, setSenderEmail] = useState('')
  const [senderPassword, setSenderPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)

  const parseEmails = (text) => {
    // Parse emails from text (supports various formats)
    const lines = text.split('\n').filter(line => line.trim())
    const parsed = []

    lines.forEach(line => {
      // Try to parse: email, name, company OR just email
      const parts = line.split(',').map(p => p.trim())
      
      if (parts.length >= 1) {
        const email = parts[0]
        const name = parts[1] || ''
        const company = parts[2] || ''
        
        if (email && email.includes('@')) {
          parsed.push({ email, name, company })
        }
      }
    })

    return parsed
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setResult(null)

    try {
      const parsedEmails = parseEmails(emails)

      if (parsedEmails.length === 0) {
        setError('No valid emails found. Please check your format.')
        setLoading(false)
        return
      }

      const response = await api.post('/api/email-campaign/send', {
        emails: parsedEmails,
        senderEmail,
        senderPassword
      })

      setResult(response.data)
      setEmails('') // Clear the textarea after success
    } catch (err) {
      setError(err.message || 'Failed to send emails')
    } finally {
      setLoading(false)
    }
  }

  const exampleFormat = `john@example.com, John Doe, Example Corp
jane@business.com, Jane Smith, Business Inc
contact@company.com`

  return (
    <section id="email-campaign" className="section" style={{ background: 'var(--surface2)', borderTop: '1px solid var(--border)' }}>
      <div className="sec-head reveal">
        <span className="sec-num">06</span>
        <h2 className="sec-title">Email Campaign Tool</h2>
        <div className="sec-line" />
      </div>

      <div className="email-campaign-container reveal">
        <div className="campaign-intro">
          <h3>Bulk Email Outreach System</h3>
          <p>Paste a list of emails below to send your website revamp offer (R2,000-R2,500) to multiple businesses at once.</p>
        </div>

        <form onSubmit={handleSubmit} className="campaign-form">
          <div className="form-section">
            <label htmlFor="sender-email">Your Email Address</label>
            <input
              id="sender-email"
              type="email"
              value={senderEmail}
              onChange={(e) => setSenderEmail(e.target.value)}
              placeholder="hello@por.problaq.co.za"
              required
            />
            <span className="form-hint">Use your Problaq Studio email</span>
          </div>

          <div className="form-section">
            <label htmlFor="sender-password">Email Password</label>
            <input
              id="sender-password"
              type="password"
              value={senderPassword}
              onChange={(e) => setSenderPassword(e.target.value)}
              placeholder="Your email password"
              required
            />
            <span className="form-hint">
              Use your email account's password
            </span>
          </div>

          <div className="form-section">
            <label htmlFor="email-list">Email List</label>
            <textarea
              id="email-list"
              value={emails}
              onChange={(e) => setEmails(e.target.value)}
              placeholder={exampleFormat}
              rows={10}
              required
            />
            <span className="form-hint">
              Format: <code>email@domain.com, Name (optional), Company (optional)</code> — one per line
            </span>
          </div>

          <button type="submit" disabled={loading} className="campaign-submit">
            {loading ? 'Sending...' : `Send to ${parseEmails(emails).length} Recipients`}
          </button>

          {error && (
            <div className="campaign-error">
              <strong>❌ Error:</strong> {error}
            </div>
          )}

          {result && (
            <div className="campaign-success">
              <h4>✅ Campaign Complete!</h4>
              <div className="result-stats">
                <div className="stat-item">
                  <div className="stat-num">{result.data.sent}</div>
                  <div className="stat-label">Sent Successfully</div>
                </div>
                <div className="stat-item">
                  <div className="stat-num">{result.data.failed}</div>
                  <div className="stat-label">Failed</div>
                </div>
                <div className="stat-item">
                  <div className="stat-num">{result.data.invalid}</div>
                  <div className="stat-label">Invalid</div>
                </div>
              </div>

              {result.data.failedEmails.length > 0 && (
                <details className="failed-details">
                  <summary>View Failed Emails ({result.data.failedEmails.length})</summary>
                  <ul>
                    {result.data.failedEmails.map((item, i) => (
                      <li key={i}>
                        {item.email} — {item.error}
                      </li>
                    ))}
                  </ul>
                </details>
              )}

              {result.data.invalidEmails.length > 0 && (
                <details className="failed-details">
                  <summary>View Invalid Emails ({result.data.invalidEmails.length})</summary>
                  <ul>
                    {result.data.invalidEmails.map((email, i) => (
                      <li key={i}>{email}</li>
                    ))}
                  </ul>
                </details>
              )}
            </div>
          )}
        </form>

        <div className="campaign-tips">
          <h4>💡 Tips for Better Results:</h4>
          <ul>
            <li>✓ Send emails during business hours (Tue-Thu, 10am-3pm)</li>
            <li>✓ Personalize by including name and company</li>
            <li>✓ Start with 10-20 emails per day to avoid spam filters</li>
            <li>✓ Follow up after 3-7 days if no response</li>
            <li>✓ Use your professional Problaq Studio email (hello@por.problaq.co.za)</li>
            <li>✓ Keep your password secure and never share it</li>
          </ul>
        </div>

        <div className="campaign-template">
          <h4>📧 Email Template Preview:</h4>
          <div className="template-preview">
            <p><strong>Subject:</strong> Quick website audit for [Company] — found 3 fixable issues</p>
            <hr />
            <p>Hi [Name],</p>
            <p>I came across [Company]'s website and noticed a few quick wins that could improve your site's performance and Google ranking...</p>
            <p><strong>Special Offer: R2,000 - R2,500</strong></p>
            <ul>
              <li>Speed optimization (2-3x faster)</li>
              <li>Mobile-responsive design</li>
              <li>SEO setup & optimization</li>
              <li>Security updates</li>
              <li>1 month support</li>
            </ul>
            <p>Recent work: cerb.church | luxesutia.co.za | gracedlivingevents.com</p>
            <p>Best regards,<br />Sivuyile | Problaq Studio</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .email-campaign-container {
          max-width: 900px;
          margin: 0 auto;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 40px;
        }

        .campaign-intro {
          margin-bottom: 40px;
          text-align: center;
        }

        .campaign-intro h3 {
          font-family: 'Syne', sans-serif;
          font-size: 1.8rem;
          margin-bottom: 12px;
          color: var(--white);
        }

        .campaign-intro p {
          font-size: 0.95rem;
          color: var(--muted);
          line-height: 1.7;
        }

        .campaign-form {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .form-section {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-section label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--white);
          letter-spacing: 0.02em;
        }

        .form-section input,
        .form-section textarea {
          padding: 12px 16px;
          border: 1px solid var(--border-bright);
          border-radius: 6px;
          font-size: 0.9rem;
          font-family: 'JetBrains Mono', monospace;
          background: var(--surface2);
          color: var(--white);
          transition: border-color 0.2s;
        }

        .form-section input:focus,
        .form-section textarea:focus {
          outline: none;
          border-color: var(--accent);
          box-shadow: 0 0 0 3px var(--accent-glow);
        }

        .form-section textarea {
          resize: vertical;
          line-height: 1.6;
        }

        .form-hint {
          font-size: 0.75rem;
          color: var(--muted);
        }

        .form-hint a {
          color: var(--accent-bright);
          text-decoration: none;
        }

        .form-hint a:hover {
          text-decoration: underline;
        }

        .form-hint code {
          background: var(--surface2);
          padding: 2px 6px;
          border-radius: 3px;
          font-size: 0.7rem;
        }

        .campaign-submit {
          padding: 16px 32px;
          background: var(--accent);
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 0.9rem;
          font-weight: 600;
          font-family: 'JetBrains Mono', monospace;
          cursor: pointer;
          transition: all 0.2s;
          letter-spacing: 0.05em;
        }

        .campaign-submit:hover:not(:disabled) {
          background: var(--accent-bright);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px var(--accent-glow);
        }

        .campaign-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .campaign-error {
          padding: 16px;
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          border-radius: 6px;
          color: #ef4444;
          font-size: 0.9rem;
        }

        .campaign-success {
          padding: 24px;
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.3);
          border-radius: 6px;
        }

        .campaign-success h4 {
          color: #22c55e;
          margin-bottom: 20px;
          font-size: 1.2rem;
        }

        .result-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 20px;
        }

        .stat-item {
          text-align: center;
          padding: 16px;
          background: var(--surface);
          border-radius: 6px;
        }

        .stat-num {
          font-size: 2rem;
          font-weight: 800;
          font-family: 'Syne', sans-serif;
          color: var(--accent-bright);
        }

        .stat-label {
          font-size: 0.75rem;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-top: 4px;
        }

        .failed-details {
          margin-top: 16px;
          font-size: 0.85rem;
        }

        .failed-details summary {
          cursor: pointer;
          color: var(--accent-bright);
          margin-bottom: 8px;
        }

        .failed-details ul {
          list-style: none;
          padding: 12px;
          background: var(--surface2);
          border-radius: 4px;
          max-height: 200px;
          overflow-y: auto;
        }

        .failed-details li {
          padding: 6px 0;
          border-bottom: 1px solid var(--border);
          font-size: 0.8rem;
          color: var(--muted);
        }

        .failed-details li:last-child {
          border-bottom: none;
        }

        .campaign-tips,
        .campaign-template {
          margin-top: 40px;
          padding: 24px;
          background: var(--surface2);
          border-radius: 8px;
        }

        .campaign-tips h4,
        .campaign-template h4 {
          font-size: 1.1rem;
          margin-bottom: 16px;
          color: var(--white);
        }

        .campaign-tips ul {
          list-style: none;
          padding: 0;
        }

        .campaign-tips li {
          padding: 8px 0;
          font-size: 0.85rem;
          color: var(--muted);
          line-height: 1.6;
        }

        .template-preview {
          padding: 20px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 6px;
          font-size: 0.85rem;
          line-height: 1.7;
          color: var(--muted);
        }

        .template-preview p {
          margin-bottom: 12px;
        }

        .template-preview hr {
          border: none;
          border-top: 1px solid var(--border);
          margin: 16px 0;
        }

        .template-preview ul {
          margin: 12px 0;
          padding-left: 20px;
        }

        .template-preview li {
          margin: 6px 0;
        }

        @media (max-width: 768px) {
          .email-campaign-container {
            padding: 24px 20px;
          }

          .result-stats {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
