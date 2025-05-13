import React from 'react'
import Navbar from '../components/common/Navbar'
import PageHeader from '../components/common/PageHeader'
import Events from '../components/Events'
import Footer from '../components/common/Footer'

function EventsPage() {
  return (
    <>
       <Navbar/>
       <PageHeader title={'EVENTS'} />
       <Events/>
       <Footer/>
    </>
  )
}

export default EventsPage