import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Index from './pages/Index'
import Admin from './pages/Admin'
import Login from './components/admin/Login/Login'
import Register from './components/admin/Register/Register'
import './App.css'
import { Routes,Route } from 'react-router-dom'
function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
        
    </>
  )
}

export default App
