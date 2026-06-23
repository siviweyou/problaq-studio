import { useEffect } from 'react'

function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.08 }
    )
    document.querySelectorAll('.reveal').forEach((el, i) => {
      el.style.transitionDelay = `${(i % 4) * 0.08}s`
      obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])
}

export default function Hero() {
  useReveal()
  return (
    <div className="hero">
      <div className="hero-orb" />
      <div className="hero-orb2" />
      <div className="hero-badge">
        <div className="badge-dot" />
        <span className="badge-text">Open to new projects &amp; freelance work</span>
      </div>
      <p className="hero-eyebrow">// Problaq Studio · Full-Stack Web Dev · South Africa</p>
      <h1 className="hero-title">
        Problaq<br />
        <span className="line2">Studio.</span>
      </h1>
      <p className="hero-sub">
        I build websites and web apps that actually work — fast, clean, and built to grow.
        From church platforms to luxury brands, gaming sites to corporate portals.
        Based in SA, shipping globally.
      </p>
      <div className="hero-row">
        <a href="#work" className="hero-cta">View My Work →</a>
        <a href="#contact" className="hero-cta-ghost">Get In Touch ↗</a>
      </div>
      <div className="hero-stats">
        <div>
          <div className="hstat-num">6<span>+</span></div>
          <div className="hstat-label">Live Projects</div>
        </div>
        <div>
          <div className="hstat-num">4<span>+</span></div>
          <div className="hstat-label">Industries Served</div>
        </div>
        <div>
          <div className="hstat-num">100<span>%</span></div>
          <div className="hstat-label">Client Satisfaction</div>
        </div>
        <div>
          <div className="hstat-num" style={{ fontSize: '1.3rem' }}>.com<span> &amp; more</span></div>
          <div className="hstat-label">Domain Experience</div>
        </div>
      </div>
    </div>
  )
}
