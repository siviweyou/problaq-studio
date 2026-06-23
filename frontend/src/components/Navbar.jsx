import { useEffect, useRef } from 'react'

export default function Navbar() {
  return (
    <nav>
      <a href="#" className="logo">
        <div className="logo-mark">P</div>
        <div className="logo-text">Problaq<span> Studio</span></div>
      </a>
      <ul className="nav-links">
        <li><a href="#names">Brand Name</a></li>
        <li><a href="#work">Projects</a></li>
        <li><a href="#pending">Now Booking</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#email-campaign">Email Tool</a></li>
      </ul>
      <a href="#contact" className="nav-hire">Hire Me →</a>
    </nav>
  )
}
