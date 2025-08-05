// src/components/Navbar.jsx
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">SayCodes</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/react">React</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/nodejs">Node.js</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/python">Python</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/django">Django</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
