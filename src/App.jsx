import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Index from './pages/Index'
import Admin from './pages/Admin'
import './App.css'
import Enter from './pages/Enter'
import Cblog from './pages/Cblog'
import { Routes,Route } from 'react-router-dom'
import Unknown from './pages/Unknown'
function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/login' element={<Enter/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/create' element={<Cblog/>}/>
    
        <Route path='*' element={<Unknown/>}/>
      </Routes>
        
    </>
  )
}

export default App
