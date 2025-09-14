import React, { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Materialize from './pages/Materialize'
import HealingCorner from './pages/HealingCorner'
import Classroom from './pages/Classroom'
import About from './pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PixelMe from './components/PixelMe'

const App = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const isHome = pathname === '/';
  const theme = isHome ? 'blue' : 'brown';

  // 判斷是否是首次載入或重新整理
  const navType = performance.getEntriesByType('navigation')[0]?.type;
  const shouldPlayAnimation = isHome && (navType === 'navigate' || navType === 'reload');
  const [animationDone, setAnimationDone] = useState(!shouldPlayAnimation);
  return (
    <>
      {/* 載入完成後才顯示導覽列 */}
      {animationDone && <Navbar theme={theme} />}

      {/* PixelMe 在載入階段覆蓋整個畫面，完成後變為靜態元素 */}
      {isHome && !animationDone && (
        <PixelMe
          mode="animated"
          onFinish={() => setAnimationDone(true)}
        />
      )}

      {/* 載入完成後才顯示內容和 Footer */}
      {animationDone && (
        <>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Materialize' element={<Materialize />} />
            <Route path='/HealingCorner' element={<HealingCorner />} />
            <Route path='/Classroom' element={<Classroom />} />
            <Route path='/About' element={<About />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  )
}

export default App