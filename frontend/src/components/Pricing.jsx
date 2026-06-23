const plans = [
  {
    label: 'Starter',
    price: 'R6,500',
    hostNote: '+ R250/mo hosting',
    features: [
      '1–3 pages (Home, About, Contact)',
      'Mobile-friendly modern design',
      'Domain registration — .com, .co.za & more',
      'Hosting setup',
      'Basic SEO setup',
      'Contact form / WhatsApp integration',
      'Social media integration',
    ],
  },
  {
    label: 'Business',
    price: 'R9,500',
    hostNote: '+ R300/mo hosting',
    features: [
      'Up to 6 pages',
      'Custom branded design',
      'Speed optimization',
      'Google Maps integration',
      'Analytics setup',
      'Everything in Starter',
    ],
  },
  {
    label: 'Premium',
    popular: true,
    price: 'R14,500',
    hostNote: '+ R350/mo hosting',
    features: [
      'Up to 10 pages',
      'Advanced UI/UX design',
      'Conversion-focused layout',
      'Blog or portfolio setup',
      'Advanced SEO structure',
      'Performance optimization',
      '2 weeks post-launch support',
    ],
  },
  {
    label: 'E-Commerce',
    price: 'R18,000',
    hostNote: '+ R350–R500/mo hosting',
    features: [
      'Online store setup',
      'Payment gateway integration',
      'Product upload (up to 20)',
      'Cart & checkout system',
      'Mobile optimized',
      'Basic SEO',
    ],
  },
]

const addons = [
  'Extra page — R500/page',
  'Logo design — R1,000',
  'Copywriting — R1,500+',
  'SEO monthly — R1,500/month',
  'Maintenance — R500/month',
  'Booking system — R1,000–R2,500',
  'Speed optimization — R1,000',
]

export default function Pricing() {
  return (
    <section id="pricing" className="section" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
      <div className="sec-head reveal">
        <span className="sec-num">04</span>
        <h2 className="sec-title">Packages &amp; Pricing</h2>
        <div className="sec-line" />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1px', background: 'var(--border)' }} className="reveal">
        {plans.map((plan, i) => (
          <div key={i}
            className="price-card"
            style={{
              background: plan.popular ? 'rgba(37,99,235,0.05)' : 'var(--surface2)',
              padding: '2.5rem',
              position: 'relative',
              overflow: 'hidden',
              transition: 'background 0.3s',
              border: plan.popular ? '1px solid rgba(37,99,235,0.25)' : 'none',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = plan.popular ? 'rgba(37,99,235,0.09)' : '#e9e4db' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = plan.popular ? 'rgba(37,99,235,0.05)' : 'var(--surface2)' }}
          >
            {plan.popular && (
              <div style={{ position: 'absolute', top: '1rem', right: '1rem', fontSize: '0.45rem', letterSpacing: '0.2em', textTransform: 'uppercase', background: 'var(--accent)', color: 'white', padding: '0.25rem 0.7rem' }}>Most Popular</div>
            )}
            <div style={{ fontSize: '0.5rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: plan.popular ? 'var(--accent-bright)' : 'var(--muted)', marginBottom: '1.25rem' }}>{plan.label}</div>
            <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: '800', fontSize: '2.6rem', color: 'var(--white)', lineHeight: '1' }}>{plan.price}<span style={{ fontSize: '1rem', color: 'var(--muted)' }}>+</span></div>
            <div style={{ fontSize: '0.5rem', letterSpacing: '0.15em', color: 'var(--muted)', marginBottom: '2rem', marginTop: '0.3rem' }}>{plan.hostNote}</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {plan.features.map((f, j) => (
                <li key={j} style={{ fontSize: '0.6rem', color: 'var(--muted)', display: 'flex', gap: '0.6rem', lineHeight: '1.5' }}>
                  <span style={{ color: plan.popular ? 'var(--accent-bright)' : 'inherit', flexShrink: 0 }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <a href="#contact"
              style={{
                display: 'inline-block', marginTop: '2rem', fontSize: '0.58rem', letterSpacing: '0.15em', textTransform: 'uppercase',
                color: plan.popular ? 'white' : 'var(--accent-bright)',
                textDecoration: 'none',
                background: plan.popular ? 'var(--accent)' : 'transparent',
                border: `1px solid ${plan.popular ? 'var(--accent)' : 'var(--border-bright)'}`,
                padding: '0.6rem 1.25rem',
                transition: 'all 0.2s',
                fontFamily: "'JetBrains Mono',monospace",
              }}
              onMouseEnter={(e) => {
                if (plan.popular) {
                  e.currentTarget.style.background = 'var(--accent-bright)'
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(37,99,235,0.35)'
                } else {
                  e.currentTarget.style.borderColor = 'var(--accent)'
                  e.currentTarget.style.background = 'rgba(37,99,235,0.06)'
                }
              }}
              onMouseLeave={(e) => {
                if (plan.popular) {
                  e.currentTarget.style.background = 'var(--accent)'
                  e.currentTarget.style.boxShadow = 'none'
                } else {
                  e.currentTarget.style.borderColor = 'var(--border-bright)'
                  e.currentTarget.style.background = 'transparent'
                }
              }}
            >Get Started →</a>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '1px', background: 'var(--border)' }}>
        <div style={{ background: 'var(--surface)', padding: '2.5rem' }} className="reveal">
          <div style={{ fontSize: '0.55rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.5rem' }}>Optional Add-Ons</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {addons.map((a, i) => (
              <span key={i} style={{ fontSize: '0.58rem', padding: '0.5rem 1rem', border: '1px solid var(--border-bright)', color: 'var(--muted)' }}>{a}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
