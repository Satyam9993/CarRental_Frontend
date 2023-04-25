import React from 'react'
import Navabar from '../../components/Navabar';
import Hero from '../../components/Hero';
import InvestmentSection from '../../components/InvestmentSection';
import HomeDetail from '../../components/HomeDetail';

const HomePage = () => {
  return (
    <div className="bg-white">
      <Navabar />
      <Hero />
      <HomeDetail />
      <InvestmentSection />
    </div>
  )
}

export default HomePage