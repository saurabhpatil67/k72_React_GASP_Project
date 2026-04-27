import React, { useRef } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Agence from './pages/Agence'
import Navbar from './components/Navigation/Navbar'
import FullScreenNav from './components/Navigation/FullScreenNav'


const App = () => {

  
  return (
    <div>
      <Navbar/>
      <FullScreenNav/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agency' element={<Agence />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App
