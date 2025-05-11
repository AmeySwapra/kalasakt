import React from 'react'
import Navbar from '../components/common/Navbar'
import PageHeader from '../components/common/PageHeader'
import AnnouncementSection from '../components/AnnouncementSection'
import Footer from '../components/common/Footer'

function AnnouncementPage() {
  return (
    <>
      <Navbar/>
      <PageHeader title={'ANNOUNCEMENT'} />
      <AnnouncementSection/>
      <Footer/>
    </>
  )
}

export default AnnouncementPage