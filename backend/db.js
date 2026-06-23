import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import { readDB, writeDB, generateId } from './utils/index.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DATA_FILE = path.join(__dirname, '..', 'data.json')

// Re-export for controllers; overrides the single-file db.js approach
export const db = {
  async getContacts() { return (await readDB()).contacts },
  async getProjects() { return (await readDB()).projects },

  async addContact(contact) {
    const data = await readDB()
    contact.id = generateId()
    contact.read = false
    contact.createdAt = new Date().toISOString()
    data.contacts.unshift(contact)
    await writeDB(data)
    return contact
  },

  async addProject(project) {
    const data = await readDB()
    project.id = generateId()
    project.order = data.projects.length + 1
    project.createdAt = new Date().toISOString()
    data.projects.push(project)
    await writeDB(data)
    return project
  },

  async updateProject(id, updates) {
    const data = await readDB()
    const idx = data.projects.findIndex((p) => p.id === id)
    if (idx === -1) return null
    data.projects[idx] = { ...data.projects[idx], ...updates }
    await writeDB(data)
    return data.projects[idx]
  },

  async deleteProject(id) {
    const data = await readDB()
    const idx = data.projects.findIndex((p) => p.id === id)
    if (idx === -1) return false
    data.projects.splice(idx, 1)
    await writeDB(data)
    return true
  },
}
