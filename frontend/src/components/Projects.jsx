import { useState, useEffect } from 'react'
import { api } from '../services/api.js'

const defaultProjects = [
  {
    id: '01',
    slug: 'cerb-church',
    title: 'Cerb Church',
    description: 'Full church website with sermon archives, events, and community tools. Built to serve a congregation online with accessibility and warmth at its core.',
    url: 'https://cerb.church',
    tags: ['Church Platform', 'CMS', 'WordPress'],
    badge: 'live',
    span: 'span8',
    featured: true,
  },
  {
    id: '02',
    slug: 'luxesutia',
    title: 'Luxesutia',
    description: 'Premium South African brand website. Refined, aspirational design built to convert high-end clientele.',
    url: 'https://luxesutia.co.za',
    tags: ['Luxury', 'E-Commerce', 'SA Brand'],
    badge: 'live',
    span: 'span4',
    featured: false,
  },
  {
    id: '03',
    slug: 'graced-living',
    title: 'Graced Living Events',
    description: 'Event planning & booking platform for a lifestyle brand. Clean layouts with enquiry and portfolio sections.',
    url: 'https://gracedlivingevents.com',
    tags: ['Events', 'Booking', 'WordPress'],
    badge: 'live',
    span: 'span6',
    featured: false,
  },
  {
    id: '04',
    slug: 'problaq-co',
    title: 'Problaq Co.',
    description: 'Your own company\'s digital home. Showcasing your brand identity and services to the South African market.',
    url: 'https://problaq.co.za',
    tags: ['Own Brand', 'Corporate', 'SA'],
    badge: 'live',
    span: 'span6',
    featured: false,
  },
  {
    id: '05',
    slug: 'coregame',
    title: 'CoreGame',
    description: 'An interactive browser-based game deployed on Netlify. Fast, lightweight, and built for fun.',
    url: 'https://coregame1.netlify.app',
    tags: ['Gaming', 'Netlify', 'Interactive', 'JavaScript'],
    badge: 'live',
    span: 'span12',
    stats: [
      { label: 'Replay value', value: '∞' },
      { label: 'Vanilla', value: 'JS' },
      { label: 'Load lag', value: '0ms' },
    ],
    featured: true,
  },
]

export default function Projects() {
  const [projects, setProjects] = useState(defaultProjects)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const json = await api.get('/api/projects')
        if (json.data && json.data.length > 0) setProjects(json.data)
      } catch {
        // Fallback to static
      }
    }
    fetchProjects()
  }, [])

  return (
    <section id="work" className="section">
      <div className="sec-head reveal">
        <span className="sec-num">01</span>
        <h2 className="sec-title">Completed Projects</h2>
        <div className="sec-line" />
      </div>
      <div className="projects-grid reveal">
        {projects.map((p) => (
          <div key={p.id || p.slug} className={`proj ${p.span}`}>
            <div className="proj-num">{p.id}</div>
            {p.badge && (
              <span className={`proj-badge ${p.badge}`}>
                {p.badge === 'live' ? '● Live' : '● WIP'}
              </span>
            )}
            <div className="proj-tags">
              {p.featured && <span className="ptag hi">Featured</span>}
              {p.tags.map((t, i) => (
                <span key={i} className="ptag">{t}</span>
              ))}
            </div>
            <h3 className="proj-title">{p.title}</h3>
            <p className="proj-desc">{p.description}</p>
            {p.url && <a href={p.url} target="_blank" rel="noreferrer" className="proj-url">{p.url.replace('https://', '')} ↗</a>}
            {p.stats && p.stats.length > 0 && (
              <div className="proj-wide-right">
                {p.stats.map((s, i) => (
                  <div key={i} className="proj-stat">
                    <div className="proj-stat-val">{s.value}</div>
                    <div className="proj-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
