import './App.css'
import CallBar from './components/CallBar'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import BookAppointment from './components/BookAppointment'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import BookingModal from './components/BookingModal'

function App() {
  return (
    <div className="app">
      <CallBar />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <BookAppointment />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <BookingModal />
    </div>
  )
}

export default App
