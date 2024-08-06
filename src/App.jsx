import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Index from './pages/Index'
import Admin from './pages/Admin'
import './App.css'
import Enter from './pages/Enter'
import { Routes,Route } from 'react-router-dom'
function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/login' element={<Enter/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='*' element={<Index/>}/>
      </Routes>
        
    </>
  )
}

export default App
