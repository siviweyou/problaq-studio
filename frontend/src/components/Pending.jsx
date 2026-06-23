const items = [
  { n: '01', title: 'Portfolio / Business Website', sub: 'Launch-ready websites for personal brands, churches, SMEs, and service businesses.', chips: ['HTML', 'CSS', 'JS'], status: 'Booking open' },
  { n: '02', title: 'Client Web App', sub: 'Dashboards, booking tools, portals, and custom workflows for growing businesses.', chips: ['React', 'Node.js', 'MongoDB'], status: 'Q3 slots' },
  { n: '03', title: 'E-Commerce Store', sub: 'WooCommerce stores with payments, product setup, and mobile-first checkout.', chips: ['WordPress', 'WooCommerce', 'PHP'], status: 'Discovery open' },
  { n: '04', title: 'Mobile-First Redesign', sub: 'Speed, SEO, layout, and UX upgrades for existing websites that need to convert better.', chips: ['Next.js', 'Tailwind', 'Vercel'], status: 'Fast turnaround' },
]

export default function Pending() {
  return (
    <section id="pending" className="section" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
      <div className="sec-head reveal">
        <span className="sec-num">02</span>
        <h2 className="sec-title">Now Booking</h2>
        <div className="sec-line" />
      </div>
      <div className="pending-list">
        {items.map((item, i) => (
          <div key={i} className="pend reveal">
            <div className="pend-n">{item.n}</div>
            <div>
              <div className="pend-title">{item.title}</div>
              <div className="pend-sub">{item.sub}</div>
            </div>
            <div className="pend-chips">
              {item.chips.map((c, j) => (
                <span key={j} className="pchip">{c}</span>
              ))}
            </div>
            <div className="pend-status">{item.status}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
