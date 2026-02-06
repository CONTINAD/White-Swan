import { useState } from 'react'
import './index.css'
// Components will be imported here
import Hero from './components/Hero'
import About from './components/About'
import Chart from './components/Chart'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-container">
      <Hero />
      <About />
      <Chart />
      <Footer />
    </div>
  )
}

export default App
