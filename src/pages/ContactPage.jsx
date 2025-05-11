import React from 'react'
import Navbar from '../components/common/Navbar'
import PageHeader from '../components/common/PageHeader'
import ContactInfoSection from '../components/ContactInfoSection'
import Footer from '../components/common/Footer'
import ContactMapSection from '../components/ContactMapSection'

function ContactPage() {
  return (
    <>
      <Navbar/>
      <PageHeader title={'CONTACT'} />
      <ContactInfoSection/>
      <ContactMapSection/>
      <Footer/>
    </>
  )
}

export default ContactPage