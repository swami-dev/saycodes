// src/App.jsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './components/pages/Home'
import ReactC from './components/pages/ReactC'
import NodeJS from './components/pages/NodeJS'
import PythonC from './components/pages/PythonC'
import Django from './components/pages/Django'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/react" element={<ReactC />} />
        <Route path="/nodejs" element={<NodeJS />} />
        <Route path="/python" element={<PythonC />} />
        <Route path="/django" element={<Django />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
