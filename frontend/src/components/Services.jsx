const services = [
  {
    icon: '</>',
    title: 'Full-Stack Development',
    description: 'Building scalable, performant web applications with modern architecture. Clean frontend experiences combined with robust backend server logic.',
    tags: ['React.js', 'Next.js', 'Node.js', 'WordPress / PHP', 'REST APIs', 'MySQL / MongoDB'],
  },
  {
    icon: '🎬',
    title: 'Post-Production & Video',
    description: 'High-end post-production, visual pacing, color grading, and broadcasting optimization. Creating engaging audio-visual narratives for broadcast and digital marketing.',
    tags: ['Premiere Pro', 'DaVinci Resolve', 'After Effects', 'Color Grading', 'Audio Mastering'],
  },
  {
    icon: '📊',
    title: 'Conversion Rate Optimization',
    description: 'Fine-tuning page performance (Core Web Vitals) and UX layout flow. Structuring content and design speeds to maximize client conversions.',
    tags: ['Core Web Vitals', 'SEO', 'Page Speed', 'Analytics', 'UX Design'],
  },
]

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="sec-head reveal">
        <span className="sec-num">01</span>
        <h2 className="sec-title">Services</h2>
        <div className="sec-line" />
      </div>
      <div className="services-grid reveal">
        {services.map((service, i) => (
          <div key={i} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.description}</p>
            <div className="service-tags">
              {service.tags.map((tag, j) => (
                <span key={j} className="service-tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
