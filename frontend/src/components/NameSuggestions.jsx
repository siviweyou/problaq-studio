const names = [
  {
    name: 'Problaq Studio',
    domain: 'por.problaq.co.za',
    why: 'Keeps your existing brand equity and uses the live portfolio subdomain already connected to Problaq.',
    vibe: '✓ Your Choice',
    featured: true,
  },
  {
    name: 'Problaq Labs',
    domain: 'problaq.dev · problaqlab.co.za',
    why: 'Tech-forward, experimental energy. Great if you want to appeal to startups, SaaS, and dev-minded clients who respect the craft. ".dev" domain is clean and professional.',
    vibe: 'Tech startup',
    featured: false,
  },
  {
    name: 'Blaq Forge',
    domain: 'blaqforge.co.za · blaqforge.dev',
    why: 'A rebrand that spins off "Blaq" from Problaq. "Forge" = building, crafting, fire — memorable metaphor for web development. Bold, SA-rooted, easy to say and spell.',
    vibe: 'Bold & memorable',
    featured: false,
  },
  {
    name: 'Problaq Works',
    domain: 'problaqworks.co.za · problaqworks.com',
    why: 'Straightforward and confident. "Works" implies results, delivery, action. Also hints at a portfolio ("see my works"). Easy for clients to remember and refer.',
    vibe: 'Results-driven',
    featured: false,
  },
  {
    name: 'Blaqdot',
    domain: 'blaqdot.co.za · blaqdot.dev',
    why: 'Short, punchy, modern. "Dot" references the internet (dot com era) while "Blaq" anchors it to your identity. Works well as a logo mark too — just a stylized dot.',
    vibe: 'Minimal & brandable',
    featured: false,
  },
  {
    name: 'Problaq Digital',
    domain: 'problaqdigital.co.za',
    why: 'Professional and clear. Signals a full-service digital presence. Best for clients in corporate, NGO, or religious sectors — exactly like Cerb.church and GracedLiving.',
    vibe: 'Corporate friendly',
    featured: false,
  },
]

export default function NameSuggestions() {
  return (
    <section id="names" className="section names-section">
      <div className="sec-head reveal">
        <span className="sec-num">00</span>
        <h2 className="sec-title">Brand Name — Chosen ✓</h2>
        <div className="sec-line" />
      </div>
      <p style={{ fontSize: '0.65rem', color: 'var(--muted)', lineHeight: '2', marginBottom: '3rem', maxWidth: '60ch' }} className="reveal">
        Brand locked in: <span style={{ color: 'var(--accent-bright)', fontWeight: '500' }}>Problaq Studio</span>.
        Agency-level identity that builds on your existing Problaq brand.
        Live domain: <span style={{ color: 'var(--white)' }}>por.problaq.co.za</span>.
      </p>
      <div className="names-grid">
        {names.map((n, i) => (
          <div key={i} className={`name-card ${n.featured ? 'featured' : ''} reveal`}>
            <div className="name-big">{n.name}</div>
            <div className="name-domain">{n.domain}</div>
            <div className="name-why">{n.why}</div>
            <span
              className="name-vibe"
              style={n.featured ? { borderColor: 'var(--accent-bright)', color: 'var(--accent-bright)' } : {}}
            >
              {n.vibe}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
