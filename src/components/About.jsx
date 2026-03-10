import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal'
import './About.css'

function About() {
    const [headerRef, headerVisible] = useScrollReveal()
    const [cardsRef, cardsVisible] = useStaggerReveal()

    const values = [
        {
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                </svg>
            ),
            title: 'Patient Listening',
            desc: 'Every patient gets unhurried attention. Dr. Gowtham Krishna takes time to understand your complete health history before prescribing.',
        },
        {
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
            ),
            title: 'Accurate Diagnosis',
            desc: 'Thorough examination and careful analysis ensure you receive the right diagnosis — not just quick prescriptions.',
        },
        {
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
            ),
            title: 'Affordable Care',
            desc: 'Practical, effective medicines at fair prices. We focus on treatment outcomes, not expensive prescriptions.',
        },
        {
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
            ),
            title: 'Holistic Approach',
            desc: 'We treat the whole person, not just symptoms. Building long-term relationships with our patients and their families.',
        },
    ]

    return (
        <section className="about section" id="about">
            <div className="container">
                <div className="about__grid">
                    <div
                        className={`about__content sr ${headerVisible ? 'sr--visible' : ''}`}
                        ref={headerRef}
                    >
                        <span className="section-label">About GK Clinic</span>
                        <h2 className="section-title">
                            A Doctor Who <span className="text-accent">Truly Listens</span>
                        </h2>
                        <p className="about__text">
                            At GK Clinic, healthcare is personal. Dr. Bandreddi Gowtham Krishna,
                            M.D. (General Medicine), Physician, Diabetologist & Infectious Disease Specialist,
                            has built a practice rooted in trust, accuracy, and genuine
                            patient care. Located in the heart of Gandhi Nagar, Vijayawada,
                            our clinic is where families come for honest medical advice and effective treatment.
                        </p>
                        <p className="about__text">
                            Unlike rushed consultations elsewhere, Dr. Gowtham Krishna spends quality time
                            with each patient — understanding your medical history, lifestyle, and concerns
                            before arriving at a diagnosis. This patient-first approach has helped us successfully
                            treat over <strong>2,000+ happy patients</strong>, while maintaining a
                            <strong> perfect 5.0 rating</strong> on Google.
                        </p>
                        <a href="#contact" className="btn btn-primary about__cta">
                            Visit Our Clinic
                        </a>

                        <div className="about__images">
                            <img src="/images/about_new_1.jpg" alt="Waiting Area" className="about__img about__img--1" />
                            <img src="/images/about_new_2.jpg" alt="Patient Beds" className="about__img about__img--2" />
                        </div>
                    </div>

                    <div
                        className={`about__values ${cardsVisible ? 'sr-stagger--visible' : ''}`}
                        ref={cardsRef}
                    >
                        {values.map((v, i) => (
                            <div
                                className="about__value-card sr-child"
                                key={i}
                                style={{ transitionDelay: `${i * 0.12}s` }}
                            >
                                <div className="about__value-icon">{v.icon}</div>
                                <div>
                                    <h3 className="about__value-title">{v.title}</h3>
                                    <p className="about__value-desc">{v.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
