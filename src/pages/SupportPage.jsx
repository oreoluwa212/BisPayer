import React from 'react'
import NavBar from '../components/NavBar'
import '../styles/Navbar.scss'
import '../styles/Support.scss'
import Support from '../components/Support'

const SupportPage = () => {
  return (
    <section className='container'>
      <NavBar/>
      <Support/>
    </section>
  )
}

export default SupportPage