import React from 'react'
import Navbar from '../components/common/Navbar'
import PageHeader from '../components/common/PageHeader'
import ImageGridWithTabs from '../components/ImageGridWithTabs'
import Footer from '../components/common/Footer'

function GalleryPage() {
  return (
    <>
      <Navbar/>
      <PageHeader title={'GALLERY'} />
      <ImageGridWithTabs/>
      <Footer/>
    </>
  )
}

export default GalleryPage