import React from 'react'
import Navbar from '../components/common/Navbar'
import AboutUs from '../components/AboutUs'
import Footer from '../components/common/Footer'
import PageHeader from '../components/common/PageHeader'

function AboutPage() {
  return (
    <>
      <Navbar/>
      <PageHeader title={'ABOUT'} />
      <AboutUs/>
      <Footer/>
    </>
  )
}

export default AboutPage