import React from 'react'
import NavBar from '../components/NavBar'
import '../styles/Navbar.scss'
import '../styles/Support.scss'
import Support from '../components/Support'
import Footer from '../components/Footer'
import Contact from '../components/Contact'


const SupportPage = () => {
  return (
    <section className='container'>
      <NavBar/>
      <Support/>
      <Contact/>
      <Footer />
    </section>
  )
}

export default SupportPage