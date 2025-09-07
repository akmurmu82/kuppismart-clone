import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ImpactSection from './components/ImpactSection'
import SolutionsSection from './components/SolutionsSection'
import CommitmentSection from './components/CommitmentSection'
import SDGGrid from './components/SDGGrid'
import TestimonialMarquee from './components/TestimonialMarquee'
import FAQSection from './components/FAQSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <ImpactSection />
      <SolutionsSection />
      <CommitmentSection />
      <SDGGrid />
      <TestimonialMarquee />
      <FAQSection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default App
