import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import BlogPage from './pages/BlogPage'
import AnnouncementPage from './pages/AnnouncementPage'
import GalleryPage from './pages/GalleryPage'

function App() {
  return (
    <>
      <BrowserRouter>
         <Routes>
           <Route path='/' element={<HomePage/>} />
            <Route path='/about' element={<AboutPage/>} />
            <Route path='/contact' element={<ContactPage/>} />
              <Route path='/blogs' element={<BlogPage/>} />
              <Route path='/announcement' element={<AnnouncementPage/>} />
              <Route path='/gallery' element={<GalleryPage/>} />
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App