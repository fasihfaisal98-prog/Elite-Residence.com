import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Navbar, Footer, WhatsAppFab } from './ui'
import Home from './Home'
import Details from './Details'

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' }), 80)
    else window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <>
      <ScrollManager /><Navbar />
      <Routes><Route path="/" element={<Home />} /><Route path="/property/:id" element={<Details />} /></Routes>
      <Footer /><WhatsAppFab />
    </>
  )
}
