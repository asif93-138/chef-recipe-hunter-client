import React from 'react';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './App.css'
{/* The following line can be included in your src/index.js or App.js file */}

import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom'

function App() {


  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
