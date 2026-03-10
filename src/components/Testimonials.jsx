import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal'
import './Testimonials.css'

function Testimonials() {
    const [headerRef, headerVisible] = useScrollReveal()
    const [gridRef, gridVisible] = useStaggerReveal()

    const reviews = [
        {
            name: 'Mani Kumar',
            rating: 5,
            text: 'Dr. Gowtham Krishna is an excellent doctor. He listens to all the symptoms very carefully and provides accurate diagnosis. Very affordable medicines and effective treatment. Highly recommended!',
            time: 'Reviewed on Google',
        },
        {
            name: 'Srikanth Reddy',
            rating: 5,
            text: 'Best clinic in Vijayawada. The doctor takes time to explain the condition and treatment clearly. No unnecessary tests or expensive medicines. Very trustworthy.',
            time: 'Reviewed on Google',
        },
        {
            name: 'Lakshmi Devi',
            rating: 5,
            text: 'My family has been visiting GK Clinic for years. Dr. Gowtham Krishna remembers our medical history and gives personalized treatment. The clinic is clean and comfortable.',
            time: 'Reviewed on Google',
        },
        {
            name: 'Ravi Teja',
            rating: 5,
            text: 'Had a persistent gastric problem for months. Doctor accurately diagnosed it in the first visit itself. Treatment was effective and affordable. Very patient and caring doctor.',
            time: 'Reviewed on Google',
        },
        {
            name: 'Padma Kumari',
            rating: 5,
            text: 'I appreciate how Dr. Gowtham Krishna spends quality time understanding the problem before prescribing. No rush at all. The clinic environment is calm and clean. Highly recommend!',
            time: 'Reviewed on Google',
        },
        {
            name: 'Venkat Rao',
            rating: 5,
            text: 'Excellent doctor with great diagnostic skills. He found the root cause of my chronic headaches which other doctors missed. Affordable treatment and very friendly approach.',
            time: 'Reviewed on Google',
        },
    ]

    const renderStars = (count) => {
        return Array.from({ length: count }, (_, i) => (
            <span key={i} className="testimonial__star">★</span>
        ))
    }

    return (
        <section className="testimonials section" id="reviews">
            <div className="container">
                <div
                    className={`testimonials__header sr ${headerVisible ? 'sr--visible' : ''}`}
                    ref={headerRef}
                >
                    <span className="section-label">Patient Reviews</span>
                    <h2 className="section-title">What Our Patients Say</h2>
                    <div className="testimonials__rating-summary">
                        <div className="testimonials__rating-badge">
                            <span className="testimonials__rating-number">5.0</span>
                            <div className="testimonials__rating-stars">
                                {renderStars(5)}
                            </div>
                            <span className="testimonials__rating-count">Based on 90+ Google Reviews</span>
                        </div>
                    </div>
                </div>

                <div
                    className={`testimonials__grid ${gridVisible ? 'sr-stagger--visible' : ''}`}
                    ref={gridRef}
                >
                    {reviews.map((review, i) => (
                        <div
                            className="testimonial__card sr-child"
                            key={i}
                            style={{ transitionDelay: `${i * 0.08}s` }}
                        >
                            <div className="testimonial__card-top">
                                <div className="testimonial__avatar">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="testimonial__name">{review.name}</h4>
                                    <div className="testimonial__stars">
                                        {renderStars(review.rating)}
                                    </div>
                                </div>
                                <svg className="testimonial__google" width="20" height="20" viewBox="0 0 24 24">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                </svg>
                            </div>
                            <p className="testimonial__text">"{review.text}"</p>
                            <span className="testimonial__time">{review.time}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
