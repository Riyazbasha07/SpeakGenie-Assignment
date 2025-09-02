import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Header from './components/Header.jsx'
import Benefits from './components/Benefits.jsx'
import Programs from './components/Programs.jsx'
import BuiltForKids from './components/BuiltForKids.jsx'
import Comparison from './components/Comparison.jsx'
import Pricing from './components/Pricing.jsx'
import ParentHub from './components/ParentHub.jsx'
import Testimonials from './components/Testimonials.jsx'
import FAQ from './components/FAQ.jsx'
import CTA from './components/CTA.jsx'
import Modal from './components/Modal.jsx'
import { SocialFooter } from './components/SocialFooter.jsx'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <Navbar onStartFree={() => setIsModalOpen(true)} />
      <Header onStartFree={() => setIsModalOpen(true)} />
      <div className="container-responsive space-y-24 py-16">
        <Benefits />
        <Programs />
        <BuiltForKids />
        <Comparison />
        <Pricing onStartFree={() => setIsModalOpen(true)} />
        <ParentHub />
        <Testimonials />
        <FAQ />
        <CTA onStartFree={() => setIsModalOpen(true)} />
      </div>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <SocialFooter />
    </div>
  )
}

export default App
