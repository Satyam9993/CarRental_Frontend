import React from 'react'
import Hero from '../../components/Hero';
import HomeDetail from '../../components/HomeDetail';
import Navbar from '../../components/Navbar';
import InvestmentSection from '../../components/InvestmentSection';

const HomePage = () => {
  return (
    <div className="bg-white">
      skagdis
      <Navbar />
      <Hero />
      <HomeDetail />
      <InvestmentSection />
    </div>
  )
}

export default HomePage