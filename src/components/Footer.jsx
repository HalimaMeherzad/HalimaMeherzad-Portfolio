import { useLocation } from 'react-router-dom'
import { AnchorLink } from './Header'
import halimaMeherzadLogo from "../images/halima logo.png"
const quickLinks = ['about', 'projects', 'services', 'skills', 'contact']

export default function Footer() {
  const { pathname } = useLocation()
  const onProjects = pathname === '/projects'

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <div className="footer-logo">
            <img
              className="logo"
              src={halimaMeherzadLogo}
              alt="halima meherzad logo"
              style={{
                maxWidth: '60px',
                width: '30%',
                height: 'auto',
              }}
            />
            <div>
              <h3>Halima Meherzad</h3>
              <p>UI/UX Designer &amp; Web Developer</p>
            </div>
          </div>
          <p className="footer-description">
            I create clean, intuitive digital experiences and responsive
            websites.
          </p>
          <div className="footer-socials">
            <a href="#" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/halima__meherzad?igsi=cGM1Nm5objA5Yml4&utm_source=qr"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/halima-meherzad-bb584231b?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/HalimaMeherzad" aria-label="GitHub">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <div className="footer-line"></div>
          <nav>
            {quickLinks.map((id, index) => (
              <span key={id} style={{ display: 'contents' }}>
                <AnchorLink id={id} onProjects={onProjects}>
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </AnchorLink>
                {index < quickLinks.length - 1 ? <span>&bull;</span> : null}
              </span>
            ))}
          </nav>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Halima Meherzad. All rights reserved.</p>
        <p>
          Designed &amp; developed by <span>Halima Meherzad</span>
        </p>
      </div>
    </footer>
  )
}
