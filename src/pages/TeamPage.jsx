import React from 'react'
import Navbar from '../components/common/Navbar'
import PageHeader from '../components/common/PageHeader'
import TeamSection from '../components/TeamSection;'
import Footer from '../components/common/Footer'

function TeamPage() {
  return (
    <>
      <Navbar/>
      <PageHeader title={'OUR TEAM'} />
      <TeamSection/>
      <Footer/>
    </>
  )
}

export default TeamPage