import React from 'react'
import Header from '../components/Header'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'
import SpecialityMenu from '../components/SpecialityMenu'
import WelcomeSection from '../components/WelcomeSection'
import ContactSection from '../components/ContactSection'


const Home = () => {
  return (
    <div className=''>
      <Header />
      <div className='bg-gray-100'>
      <WelcomeSection />
      </div>
      <div className='bg-gray-50'></div>
      <SpecialityMenu />
      <div className='bg-gray-100'>
      <TopDoctors />
      </div>
      <Banner />
      <div className="hidden md:block">
        <ContactSection />
      </div>


    </div>
  )
}

export default Home