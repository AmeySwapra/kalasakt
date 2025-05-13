import React from 'react'
import Navbar from '../components/common/Navbar'
import SliderComponent from '../components/SliderComponent'
import Footer from '../components/common/Footer'
import EventSchedule from '../components/EventSchedule'
import CulturalSection from '../components/CulturalSection'
import ImageSlider from '../components/ImageSlider'
import KalasaktCulturalFoundation from '../components/KalasaktCulturalFoundation'
import pic from '../assets/banner/pic2.webp'
import BackgroundSection from '../components/BackgroundSection'

function HomePage() {
  return (
    <>
      <Navbar/>
      <SliderComponent/>
      <KalasaktCulturalFoundation/>
      <ImageSlider/>
      <CulturalSection/>
      <EventSchedule/>
      <BackgroundSection bgImage={pic} />
      <Footer/>
    </>
  )
}

export default HomePage