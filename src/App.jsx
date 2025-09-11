import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Materialize from './pages/Materialize'
import HealingCorner from './pages/HealingCorner'
import Classroom from './pages/Classroom'
import About from './pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const isHome = pathname === '/';
  const theme = isHome ? 'blue' : 'brown';
  return (
    <>
      <Navbar theme={theme} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Materialize' element={<Materialize />} />
        <Route path='/HealingCorner' element={<HealingCorner />} />
        <Route path='/Classroom' element={<Classroom />} />
        <Route path='/About' element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App