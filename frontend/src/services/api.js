const API_BASE = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '')

export const api = {
  async get(endpoint) {
    const res = await fetch(`${API_BASE}${endpoint}`)
    if (!res.ok) throw new Error(`GET ${endpoint} failed with ${res.status}`)
    return res.json()
  },
  async post(endpoint, body) {
    const res = await fetch(`${API_BASE}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    const json = await res.json()
    if (!res.ok) throw new Error(json.message || `POST ${endpoint} failed with ${res.status}`)
    return json
  },
  async put(endpoint, body) {
    const res = await fetch(`${API_BASE}${endpoint}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    return res.json()
  },
  async del(endpoint) {
    const res = await fetch(`${API_BASE}${endpoint}`, { method: 'DELETE' })
    return res.json()
  },
}
