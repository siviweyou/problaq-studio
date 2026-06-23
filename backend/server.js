import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import { sendBulkEmails, getCampaignStats, saveCampaign } from './controllers/emailCampaignController.js'

dotenv.config()

// ── File-based DB ──────────────────────────────────────────────────────────────
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DATA_FILE = path.join(__dirname, 'data.json')

const readDB = async () => {
  try { return JSON.parse(await fs.readFile(DATA_FILE, 'utf-8')) }
  catch { return { contacts: [], projects: seedProjects } }
}

const writeDB = async (data) => await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2))

const genId = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 8)

// ── Seed data ──────────────────────────────────────────────────────────────────
const seedProjects = [
  { id: 'cerb-church',   title: 'Cerb Church', slug: 'cerb-church', description: 'Full church website with sermon archives, events, and community tools. Built to serve a congregation online with accessibility and warmth at its core.', url: 'https://cerb.church', tags: ['Church Platform', 'CMS', 'WordPress'], badge: 'live', span: 'span8', featured: true, order: 1, createdAt: '2025-01-01' },
  { id: 'luxesutia',     title: 'Luxesutia',   slug: 'luxesutia',   description: 'Premium South African brand website. Refined, aspirational design built to convert high-end clientele.', url: 'https://luxesutia.co.za', tags: ['Luxury', 'E-Commerce', 'SA Brand'], badge: 'live', span: 'span4', featured: false, order: 2, createdAt: '2025-01-02' },
  { id: 'graced-living', title: 'Graced Living Events', slug: 'graced-living', description: 'Event planning and booking platform for a lifestyle brand. Clean layouts with enquiry and portfolio sections.', url: 'https://gracedlivingevents.com', tags: ['Events', 'Booking', 'WordPress'], badge: 'live', span: 'span6', featured: false, order: 3, createdAt: '2025-01-03' },
  { id: 'problaq-co',    title: 'Problaq Co.', slug: 'problaq-co',  description: "Your own company's digital home. Showcasing your brand identity and services to the South African market.", url: 'https://problaq.co.za', tags: ['Own Brand', 'Corporate', 'SA'], badge: 'live', span: 'span6', featured: false, order: 4, createdAt: '2025-01-04' },
  { id: 'coregame',      title: 'CoreGame',    slug: 'coregame',    description: 'An interactive browser-based game deployed on Netlify. Fast, lightweight, and built for fun.', url: 'https://coregame1.netlify.app', tags: ['Gaming', 'Netlify', 'Interactive', 'JavaScript'], badge: 'live', span: 'span12', featured: true, stats: [{ label: 'Replay value', value: '∞' }, { label: 'Vanilla', value: 'JS' }, { label: 'Load lag', value: '0ms' }], order: 5, createdAt: '2025-01-05' },
]

// ── Express app ────────────────────────────────────────────────────────────────
const app = express()
const PORT = process.env.PORT || 8000

const allowedOrigins = [
  process.env.FRONTEND_URL || 'http://localhost:5173',
  'https://por.problaq.co.za',
  'https://problaq.co.za',
]

app.use(
  cors({
    origin(origin, cb) { if (!origin || allowedOrigins.includes(origin)) cb(null, true); else cb(new Error('Not allowed')) },
    credentials: true,
  })
)
app.use(express.json({ limit: '10kb' }))
app.use(express.urlencoded({ extended: true }))

// Request logging
app.use((_req, res, next) => {
  const start = Date.now()
  res.on('finish', () => console.log(`${_req.method} ${_req.originalUrl} → ${res.statusCode} [${Date.now() - start}ms]`))
  next()
})

// ── Routes ─────────────────────────────────────────────────────────────────────

// GET  /api/health       — liveness
app.get('/api/health', (_req, res) => {
  res.status(200).json({ success: true, status: 'ok', port: PORT, uptime: Math.round(process.uptime()) })
})

// ── Contact ────────────────────────────────────────────────────────────────────
const validateContact = (req, _res, next) => {
  const { name, email, subject, message } = req.body
  if (!name || !email || !subject || !message) return _res.status(400).json({ success: false, message: 'All fields are required.' })
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return _res.status(400).json({ success: false, message: 'Invalid email.' })
  next()
}

app.post('/api/contact', validateContact, async (req, res) => {
  const data = await readDB()
  const contact = { id: genId(), read: false, createdAt: new Date().toISOString(), ...req.body }
  data.contacts.unshift(contact)
  await writeDB(data)
  res.status(201).json({ success: true, message: "We'll be in touch!", data: contact })
})

app.get('/api/contact', async (_req, res) => {
  const data = await readDB()
  res.status(200).json({ success: true, count: data.contacts.length, data: data.contacts })
})

// ── Projects ───────────────────────────────────────────────────────────────────
app.get('/api/projects', async (_req, res) => {
  const data = await readDB()
  res.status(200).json({ success: true, count: data.projects.length, data: data.projects })
})

app.post('/api/projects', async (req, res) => {
  const data = await readDB()
  const project = { id: genId(), order: data.projects.length + 1, createdAt: new Date().toISOString(), ...req.body }
  data.projects.push(project)
  await writeDB(data)
  res.status(201).json({ success: true, data: project })
})

app.put('/api/projects/:id', async (req, res) => {
  const data = await readDB()
  const idx = data.projects.findIndex((p) => p.id === req.params.id)
  if (idx === -1) return res.status(404).json({ success: false, message: 'Project not found.' })
  data.projects[idx] = { ...data.projects[idx], ...req.body }
  await writeDB(data)
  res.status(200).json({ success: true, data: data.projects[idx] })
})

app.delete('/api/projects/:id', async (req, res) => {
  const data = await readDB()
  const idx = data.projects.findIndex((p) => p.id === req.params.id)
  if (idx === -1) return res.status(404).json({ success: false, message: 'Project not found.' })
  data.projects.splice(idx, 1)
  await writeDB(data)
  res.status(200).json({ success: true, deleted: true })
})

// ── Email Campaign ─────────────────────────────────────────────────────────────
app.post('/api/email-campaign/send', sendBulkEmails)
app.get('/api/email-campaign/stats', getCampaignStats)
app.post('/api/email-campaign/save', saveCampaign)

// ── 404 / error handler ────────────────────────────────────────────────────────
app.use((_req, res) => res.status(404).json({ success: false, message: 'Route not found.' }))

app.use((err, _req, res, _next) => {
  console.error('Unhandled:', err)
  res.status(500).json({ success: false, message: err.message || 'Internal server error.' })
})

// ── Start ──────────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`)
  console.log(`  GET  /api/health`)
  console.log(`  POST /api/contact`)
  console.log(`  GET  /api/projects`)
})
