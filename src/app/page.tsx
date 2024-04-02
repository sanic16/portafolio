import About from '@/sections/about/About'
import Education from '@/sections/education/Education'
import FloatMenu from '@/sections/float-menu/FloatMenu'
import Footer from '@/sections/footer/Footer'
import Header from '@/sections/header/Header'
import Projects from '@/sections/projects/Projects'
import Services from '@/sections/services/Services'
import React from 'react'



export default function page() {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Services />
      <Education />
      <FloatMenu />
    </>
  )
}
