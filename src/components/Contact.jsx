import { useScrollReveal } from '../hooks/useScrollReveal'
import './Contact.css'

function Contact() {
    const [headerRef, headerVisible] = useScrollReveal()
    const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.1 })

    return (
        <section className="contact section" id="contact">
            <div className="container">
                <div
                    className={`contact__header sr ${headerVisible ? 'sr--visible' : ''}`}
                    ref={headerRef}
                >
                    <span className="section-label">Visit Us</span>
                    <h2 className="section-title">Get in Touch</h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        We're here to help. Visit us or call to schedule your consultation.
                    </p>
                </div>

                <div
                    className={`contact__grid sr ${gridVisible ? 'sr--visible' : ''}`}
                    ref={gridRef}
                >
                    <div className="contact__info">
                        <div className="contact__info-card">
                            <div className="contact__info-item">
                                <div className="contact__info-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="contact__info-title">Clinic Address</h4>
                                    <p className="contact__info-text">
                                        Gym Khana Grounds, 26-14-17<br />
                                        Annapurna Devi Street, Opp. Ward Sachivalayam<br />
                                        Gandhi Nagar, Vijayawada<br />
                                        Andhra Pradesh 520003
                                    </p>
                                </div>
                            </div>

                            <div className="contact__info-item">
                                <div className="contact__info-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="contact__info-title">Phone</h4>
                                    <a href="tel:09948893889" className="contact__phone">099488 93889</a>
                                    <p className="contact__info-text contact__info-text--small">Tap to call directly</p>
                                </div>
                            </div>

                            <div className="contact__info-item">
                                <div className="contact__info-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="12 6 12 12 16 14" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="contact__info-title">Clinic Hours</h4>
                                    <p className="contact__info-text">Open Daily</p>
                                    <p className="contact__info-text contact__info-text--highlight">Closes at 9:00 PM</p>
                                </div>
                            </div>
                        </div>

                        <a href="tel:09948893889" className="btn btn-primary contact__call-btn">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            Call for Appointment
                        </a>

                        <a
                            href="https://www.google.com/maps/place/GK+Clinic/@16.5192366,80.6074352,15z/data=!4m10!1m3!11m2!2sF-TsWm0eHykd_qCB2rGhPw!3e3!3m5!1s0x3a35ef48ee4a3eb9:0x889e674e6ea7e6bc!8m2!3d16.5192366!4d80.6264896!16s%2Fg%2F11pyvwqmps"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline contact__dir-btn"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="3 11 22 2 13 21 11 13 3 11" />
                            </svg>
                            Get Directions
                        </a>
                    </div>

                    <div className="contact__map">
                        <iframe
                            title="GK Clinic Location"
                            src="https://maps.google.com/maps?hl=en&q=16.5192366,80.6264896+(GK%20Clinic)&t=&z=15&ie=UTF8&iwloc=B&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0, borderRadius: 'var(--radius-lg)' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
