import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './BookAppointment.css'

function BookAppointment() {
    const WHATSAPP_NUMBER = '919948893889'
    const [infoRef, infoVisible] = useScrollReveal()
    const [formRef, formVisible] = useScrollReveal({ threshold: 0.1 })

    const [form, setForm] = useState({
        name: '',
        phone: '',
        date: '',
        time: '',
        reason: '',
    })

    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const message = `🏥 *New Appointment Request — GK Clinic*\n\n` +
            `👤 *Patient Name:* ${form.name}\n` +
            `📞 *Phone:* ${form.phone}\n` +
            `📅 *Preferred Date:* ${form.date}\n` +
            `🕐 *Preferred Time:* ${form.time}\n` +
            `📝 *Reason / Symptoms:* ${form.reason || 'General Consultation'}\n\n` +
            `Please confirm my appointment. Thank you!`

        const encoded = encodeURIComponent(message)
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`

        setSubmitted(true)

        setTimeout(() => {
            window.open(whatsappUrl, '_blank')
        }, 600)
    }

    const getTodayDate = () => {
        const today = new Date()
        return today.toISOString().split('T')[0]
    }

    const timeSlots = [
        'Morning (9 AM - 12 PM)',
        'Afternoon (12 PM - 3 PM)',
        'Evening (3 PM - 6 PM)',
        'Night (6 PM - 9 PM)',
    ]

    return (
        <section className="booking section" id="book">
            <div className="container">
                <div className="booking__grid">
                    <div
                        className={`booking__info sr ${infoVisible ? 'sr--visible' : ''}`}
                        ref={infoRef}
                    >
                        <span className="section-label">Book Appointment</span>
                        <h2 className="section-title">
                            Schedule Your <span className="text-accent">Visit Today</span>
                        </h2>
                        <p className="booking__desc">
                            Fill in your details and we'll confirm your appointment via WhatsApp.
                            Quick, easy, and no waiting on phone calls.
                        </p>

                        <div className="booking__benefits">
                            <div className="booking__benefit">
                                <div className="booking__benefit-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </div>
                                <span>Instant WhatsApp confirmation</span>
                            </div>
                            <div className="booking__benefit">
                                <div className="booking__benefit-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </div>
                                <span>No registration required</span>
                            </div>
                            <div className="booking__benefit">
                                <div className="booking__benefit-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </div>
                                <span>Choose your preferred time slot</span>
                            </div>
                            <div className="booking__benefit">
                                <div className="booking__benefit-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </div>
                                <span>Open daily until 9 PM</span>
                            </div>
                        </div>

                        <div className="booking__whatsapp-direct">
                            <p className="booking__whatsapp-label">Or message us directly:</p>
                            <a
                                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi, I would like to book an appointment at GK Clinic.')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn booking__whatsapp-btn"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Chat on WhatsApp
                            </a>
                        </div>
                    </div>

                    <div
                        className={`booking__form-wrapper sr ${formVisible ? 'sr--visible' : ''}`}
                        ref={formRef}
                        style={{ transitionDelay: '0.15s' }}
                    >
                        {!submitted ? (
                            <form className="booking__form" onSubmit={handleSubmit}>
                                <h3 className="booking__form-title">Patient Details</h3>

                                <div className="booking__field">
                                    <label htmlFor="book-name" className="booking__label">Full Name *</label>
                                    <input
                                        id="book-name"
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                        required
                                        className="booking__input"
                                    />
                                </div>

                                <div className="booking__field">
                                    <label htmlFor="book-phone" className="booking__label">Phone Number *</label>
                                    <input
                                        id="book-phone"
                                        type="tel"
                                        name="phone"
                                        value={form.phone}
                                        onChange={handleChange}
                                        placeholder="Enter your phone number"
                                        required
                                        className="booking__input"
                                    />
                                </div>

                                <div className="booking__row">
                                    <div className="booking__field">
                                        <label htmlFor="book-date" className="booking__label">Preferred Date *</label>
                                        <input
                                            id="book-date"
                                            type="date"
                                            name="date"
                                            value={form.date}
                                            onChange={handleChange}
                                            min={getTodayDate()}
                                            required
                                            className="booking__input"
                                        />
                                    </div>
                                    <div className="booking__field">
                                        <label htmlFor="book-time" className="booking__label">Preferred Time *</label>
                                        <select
                                            id="book-time"
                                            name="time"
                                            value={form.time}
                                            onChange={handleChange}
                                            required
                                            className="booking__input booking__select"
                                        >
                                            <option value="">Select time slot</option>
                                            {timeSlots.map(slot => (
                                                <option key={slot} value={slot}>{slot}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="booking__field">
                                    <label htmlFor="book-reason" className="booking__label">Reason / Symptoms</label>
                                    <textarea
                                        id="book-reason"
                                        name="reason"
                                        value={form.reason}
                                        onChange={handleChange}
                                        placeholder="Briefly describe your symptoms or reason for visit (optional)"
                                        rows="3"
                                        className="booking__input booking__textarea"
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary booking__submit">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    Book via WhatsApp
                                </button>

                                <p className="booking__disclaimer">
                                    Your details will be sent to GK Clinic's WhatsApp for appointment confirmation.
                                </p>
                            </form>
                        ) : (
                            <div className="booking__success">
                                <div className="booking__success-icon">
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                        <polyline points="22 4 12 14.01 9 11.01" />
                                    </svg>
                                </div>
                                <h3 className="booking__success-title">Redirecting to WhatsApp...</h3>
                                <p className="booking__success-text">
                                    Your appointment details are ready! WhatsApp should open automatically.
                                    Just tap <strong>Send</strong> to confirm your booking.
                                </p>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => setSubmitted(false)}
                                    style={{ marginTop: '1rem' }}
                                >
                                    Book Another Appointment
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BookAppointment
