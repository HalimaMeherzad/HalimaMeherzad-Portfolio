import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import halimaLogo from "../images/halima logo.png"
const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Services', id: 'services' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
]

export function AnchorLink({ id, onProjects, className, children, onClick }) {
  if (onProjects) {
    return (
      <Link to={`/#${id}`} className={className} onClick={onClick}>
        {children}
      </Link>
    )
  }
  return (
    <a href={`#${id}`} className={className} onClick={onClick}>
      {children}
    </a>
  )
}

export default function Header() {
  const { pathname } = useLocation()
  const onProjects = pathname === '/projects'
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header>
      <Link to="/" className="logo-link" style={{ textDecoration: 'none' }}>
        <div className="logo">
          <img src={halimaLogo} alt="halima meherzad logo" />
          <span className="name">Halima Meherzad</span>
        </div>
      </Link>
      <nav className="navbar">
        <ul className={menuOpen ? 'active' : undefined}>
          {navItems.map((item) => (
            <AnchorLink
              key={item.id}
              id={item.id}
              onProjects={onProjects}
              onClick={closeMenu}
            >
              <li>{item.label}</li>
            </AnchorLink>
          ))}
        </ul>
        <AnchorLink
          id="contact"
          onProjects={onProjects}
          className="btn1"
          onClick={closeMenu}
        >
          Contact Me
        </AnchorLink>
        <button
          className="menu-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>
      </nav>
    </header>
  )
}
