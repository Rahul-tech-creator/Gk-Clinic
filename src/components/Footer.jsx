import './Footer.css'

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__grid">
                    <div className="footer__brand">
                        <div className="footer__logo">
                            <div className="footer__logo-icon">
                                <span>GK</span>
                            </div>
                            <div>
                                <span className="footer__logo-name">GK Clinic</span>
                                <span className="footer__logo-sub">Dr. Gowtham Krishna</span>
                            </div>
                        </div>
                        <p className="footer__brand-text">
                            Trusted family healthcare in Gandhi Nagar, Vijayawada.
                            Providing compassionate, accurate, and affordable medical care since day one.
                        </p>
                    </div>

                    <div className="footer__links">
                        <h4 className="footer__links-title">Quick Links</h4>
                        <a href="#home" className="footer__link">Home</a>
                        <a href="#about" className="footer__link">About Us</a>
                        <a href="#services" className="footer__link">Services</a>
                        <a href="#reviews" className="footer__link">Patient Reviews</a>
                        <a href="#contact" className="footer__link">Contact</a>
                    </div>

                    <div className="footer__links">
                        <h4 className="footer__links-title">Services</h4>
                        <span className="footer__link--static">General Consultations</span>
                        <span className="footer__link--static">BP Management</span>
                        <span className="footer__link--static">Gastric & Digestive Care</span>
                        <span className="footer__link--static">Calcium Deficiency</span>
                        <span className="footer__link--static">Personalized Treatment</span>
                    </div>

                    <div className="footer__contact">
                        <h4 className="footer__links-title">Contact Info</h4>
                        <a href="tel:09948893889" className="footer__link">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            099488 93889
                        </a>
                        <span className="footer__link--static">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                            Open Daily, till 9 PM
                        </span>
                        <span className="footer__link--static footer__address">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                            Gandhi Nagar, Vijayawada
                        </span>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p className="footer__copyright">
                        © {currentYear} GK Clinic. All rights reserved.
                    </p>
                    <p className="footer__note">
                        Your trusted neighborhood clinic in Vijayawada.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
