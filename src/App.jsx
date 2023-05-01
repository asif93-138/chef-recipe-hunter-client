import { useState } from 'react'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
{/* The following line can be included in your src/index.js or App.js file */}

import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
