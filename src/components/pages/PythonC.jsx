// import React from 'react'

// const PythonC = () => {
//   return (
//     <div>PythonC</div>
//   )
// }

// export default PythonC

// src/components/pages/PythonC.jsx
import React from 'react'

const PythonC = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="text-center mb-4">
        <h1 className="display-4">Python Full Course</h1>
        <p className="lead">Learn Python from the ground up – from basic syntax to building real-world applications.</p>
        <a
          href="https://docs.python.org/3/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary mt-3"
        >
          Explore Python Docs
        </a>
      </div>

      <div className="card mb-4 shadow">
        <div className="card-body">
          <h4 className="card-title">📘 What You’ll Learn</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Python syntax and semantics</li>
            <li className="list-group-item">Variables, Data Types, and Operators</li>
            <li className="list-group-item">Control Flow (if, else, loops)</li>
            <li className="list-group-item">Functions and Recursion</li>
            <li className="list-group-item">Lists, Tuples, Sets, Dictionaries</li>
            <li className="list-group-item">File I/O</li>
            <li className="list-group-item">Object-Oriented Programming (OOP)</li>
            <li className="list-group-item">Modules and Packages</li>
            <li className="list-group-item">Error Handling</li>
            <li className="list-group-item">Working with Libraries (e.g., requests, pandas, matplotlib)</li>
            <li className="list-group-item">Web Scraping</li>
            <li className="list-group-item">Intro to Web Development (Flask/Django)</li>
            <li className="list-group-item">Final Projects</li>
          </ul>
        </div>
      </div>

      <div className="card mb-4 shadow">
        <div className="card-body">
          <h4 className="card-title">📅 Course Syllabus</h4>
          <ol className="list-group list-group-numbered">
            <li className="list-group-item">Python Setup & Hello World</li>
            <li className="list-group-item">Variables, Data Types & Type Casting</li>
            <li className="list-group-item">Control Flow and Loops</li>
            <li className="list-group-item">Functions and Scope</li>
            <li className="list-group-item">Working with Lists and Dictionaries</li>
            <li className="list-group-item">Tuples, Sets, and Advanced Collections</li>
            <li className="list-group-item">File Handling (Read/Write)</li>
            <li className="list-group-item">Error and Exception Handling</li>
            <li className="list-group-item">OOP – Classes and Objects</li>
            <li className="list-group-item">Using External Libraries (pip, virtualenv)</li>
            <li className="list-group-item">Web Scraping with BeautifulSoup</li>
            <li className="list-group-item">Simple Web App with Flask</li>
            <li className="list-group-item">Mini Project: To-Do CLI App</li>
            <li className="list-group-item">Final Project: Weather Dashboard using APIs</li>
          </ol>
        </div>
      </div>

      <div className="card shadow">
        <div className="card-body">
          <h4 className="card-title">✅ Prerequisites</h4>
          <ul>
            <li>Basic computer literacy</li>
            <li>No prior coding experience required</li>
            <li>Motivation to learn and build real applications</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-5">
        <a href="#" className="btn btn-success btn-lg">Enroll Now</a>
      </div>
    </div>
  )
}

export default PythonC
