import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal'
import './Services.css'

function Services() {
    const [headerRef, headerVisible] = useScrollReveal()
    const [gridRef, gridVisible] = useStaggerReveal()

    const services = [
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
            ),
            title: 'General Medical Consultations',
            desc: 'Comprehensive health check-ups and consultations for individuals and families of all ages.',
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
            ),
            title: 'Diagnosis & Treatment',
            desc: 'Accurate diagnosis of common and complex health issues with effective, evidence-based treatment plans.',
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
            ),
            title: 'Blood Pressure Management',
            desc: 'Regular monitoring, lifestyle guidance, and medication management for hypertension and related conditions.',
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                    <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
            ),
            title: 'Gastric & Digestive Care',
            desc: 'Treatment for acidity, bloating, indigestion, and chronic gastric problems with dietary guidance.',
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                    <line x1="6" y1="1" x2="6" y2="4" />
                    <line x1="10" y1="1" x2="10" y2="4" />
                    <line x1="14" y1="1" x2="14" y2="4" />
                </svg>
            ),
            title: 'Calcium Deficiency Management',
            desc: 'Assessment and treatment of calcium deficiency, bone health management, and supplementation guidance.',
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                    <line x1="12" y1="11" x2="12" y2="17" />
                    <line x1="9" y1="14" x2="15" y2="14" />
                </svg>
            ),
            title: 'Personalized Treatment Plans',
            desc: 'Customized treatment based on your complete medical history, lifestyle, and individual health needs.',
        },
    ]

    return (
        <section className="services section" id="services">
            <div className="container">
                <div
                    className={`services__header sr ${headerVisible ? 'sr--visible' : ''}`}
                    ref={headerRef}
                >
                    <span className="section-label">Our Services</span>
                    <h2 className="section-title">Comprehensive Healthcare for Your Family</h2>
                    <p className="section-subtitle">
                        From routine check-ups to managing chronic conditions, we provide thorough,
                        patient-centered care for the whole family.
                    </p>
                </div>

                <div
                    className={`services__grid ${gridVisible ? 'sr-stagger--visible' : ''}`}
                    ref={gridRef}
                >
                    {services.map((service, i) => (
                        <div
                            className="services__card sr-child"
                            key={i}
                            style={{ transitionDelay: `${i * 0.1}s` }}
                        >
                            <div className="services__card-icon">{service.icon}</div>
                            <h3 className="services__card-title">{service.title}</h3>
                            <p className="services__card-desc">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
