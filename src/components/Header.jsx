import { useState, useEffect } from 'react'
import './Header.css'

function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Lock body scroll when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => { document.body.style.overflow = '' }
    }, [menuOpen])

    const navLinks = [
        { href: '#home', label: 'Home', icon: '🏠' },
        { href: '#about', label: 'About', icon: '👨‍⚕️' },
        { href: '#services', label: 'Services', icon: '🩺' },
        { href: '#reviews', label: 'Reviews', icon: '⭐' },
        { href: '#book', label: 'Book', icon: '📅' },
        { href: '#contact', label: 'Contact', icon: '📍' },
    ]

    return (
        <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
            <div className="container header__inner">
                <a href="#home" className="header__logo">
                    <div className="header__logo-icon">
                        <span>GK</span>
                    </div>
                    <div className="header__logo-text">
                        <span className="header__logo-name">GK Clinic</span>
                        <span className="header__logo-sub">Dr. Gowtham Krishna</span>
                    </div>
                </a>

                {/* Mobile overlay */}
                <div
                    className={`header__overlay ${menuOpen ? 'header__overlay--visible' : ''}`}
                    onClick={() => setMenuOpen(false)}
                />

                <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
                    <div className="header__nav-header">
                        <div className="header__nav-brand">
                            <div className="header__logo-icon">
                                <span>GK</span>
                            </div>
                            <div>
                                <span className="header__logo-name">GK Clinic</span>
                                <span className="header__logo-sub">Dr. Gowtham Krishna</span>
                            </div>
                        </div>
                    </div>

                    <div className="header__nav-links">
                        {navLinks.map((link, i) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="header__nav-link"
                                onClick={() => setMenuOpen(false)}
                                style={{ animationDelay: menuOpen ? `${i * 0.06}s` : '0s' }}
                            >
                                <span className="header__nav-emoji">{link.icon}</span>
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <div className="header__nav-footer">
                        <a href="#book" className="btn btn-primary header__cta-mobile" onClick={() => setMenuOpen(false)}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                            Book Appointment
                        </a>
                        <a
                            href="https://wa.me/919948893889?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn header__wa-mobile"
                            onClick={() => setMenuOpen(false)}
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Chat on WhatsApp
                        </a>
                        <p className="header__nav-phone">
                            <a href="tel:09948893889">📞 099488 93889</a>
                        </p>
                    </div>
                </nav>

                <a href="#book" className="btn btn-primary header__cta">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                    Book Now
                </a>

                <button
                    className={`header__burger ${menuOpen ? 'header__burger--open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    )
}

export default Header
