const categories = [
  {
    icon: '◈',
    name: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Tailwind', 'GSAP', 'Responsive Design'],
  },
  {
    icon: '◎',
    name: 'Backend & CMS',
    skills: ['Node.js', 'PHP', 'WordPress', 'WooCommerce', 'MySQL', 'MongoDB', 'REST APIs'],
  },
  {
    icon: '◉',
    name: 'Tooling & Hosting',
    skills: ['Git', 'Netlify', 'Vercel', 'cPanel', 'Figma', 'VS Code', 'Domain Registration'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="sec-head reveal">
        <span className="sec-num">03</span>
        <h2 className="sec-title">Skills &amp; Stack</h2>
        <div className="sec-line" />
      </div>
      <div className="skills-wrap reveal">
        {categories.map((cat, i) => (
          <div key={i} className="skill-cell">
            <div className="skill-icon">{cat.icon}</div>
            <div className="skill-cat">{cat.name}</div>
            <div className="skill-pills">
              {cat.skills.map((skill, j) => (
                <span key={j} className="spill">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
