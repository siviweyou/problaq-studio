import { useEffect, useState, useCallback } from 'react'
import { api } from '../services/api.js'

export function useScrollReveal() {
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

export function useContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)
  const [error, setError] = useState('')

  const setField = (name, value) => setForm((p) => ({ ...p, [name]: value }))

  const submit = useCallback(async (e) => {
    e.preventDefault()
    setStatus('sending')
    setError('')
    try {
      await api.post('/api/contact', form)
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setStatus('error')
      setError(err.message)
    }
  }, [form])

  return { form, setField, status, error, setStatus, submit }
}
