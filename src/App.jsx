import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home/Home'
import { Route, Routes, BrowserRouter, Navigate, Link } from 'react-router-dom'
import Foods from './pages/foods/Foods'
import { HamburguersProvider } from './context/hamburguers'


function App() {
  const [count, setCount] = useState(0)

  return (
    <HamburguersProvider>
      <BrowserRouter>
        <Routes>
          <Route path='home' element={<Home/>}/>
          <Route path='foods' element={<Foods/>}/>
          <Route path='*' element={<Home/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </HamburguersProvider>
  )
}

export default App
