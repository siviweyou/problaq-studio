import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0
    const handleMove = (e) => { mx = e.clientX; my = e.clientY }
    document.addEventListener('mousemove', handleMove)

    const loop = () => {
      if (cursorRef.current) {
        cursorRef.current.style.left = mx + 'px'
        cursorRef.current.style.top = my + 'px'
      }
      rx += (mx - rx) * 0.1
      ry += (my - ry) * 0.1
      if (ringRef.current) {
        ringRef.current.style.left = rx + 'px'
        ringRef.current.style.top = ry + 'px'
      }
      requestAnimationFrame(loop)
    }
    const raf = requestAnimationFrame(loop)

    return () => {
      document.removeEventListener('mousemove', handleMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  useEffect(() => {
    const els = document.querySelectorAll('a, button, .proj, .name-card')
    const enter = (el) => {
      cursorRef.current?.classList.add('big')
      ringRef.current?.classList.add('big')
    }
    const leave = () => {
      cursorRef.current?.classList.remove('big')
      ringRef.current?.classList.remove('big')
    }
    els.forEach((el) => { el.addEventListener('mouseenter', enter); el.addEventListener('mouseleave', leave) })
    return () => els.forEach((el) => { el.removeEventListener('mouseenter', enter); el.removeEventListener('mouseleave', leave) })
  })

  return (
    <>
      <div className="cursor" id="C" ref={cursorRef} />
      <div className="cursor-ring" id="CR" ref={ringRef} />
    </>
  )
}
