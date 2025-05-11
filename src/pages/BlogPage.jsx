import React from 'react'
import Navbar from '../components/common/Navbar'
import PageHeader from '../components/common/PageHeader'
import BlogSection from '../components/BlogSection'
import Footer from '../components/common/Footer'

function BlogPage() {
  return (
    <>
      <Navbar/>
      <PageHeader title={'BLOGS'} />
      <BlogSection/>
      <Footer/>
    </>
  )
}

export default BlogPage