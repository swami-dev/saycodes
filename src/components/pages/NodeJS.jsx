// // src/components/pages/NodeJS.jsx
// import React from 'react'

// const NodeJS = () => {
//   return (
//     <div className="container mt-5">
//       <h2>Node.js Course</h2>
//       <p>Learn backend development using Node.js.</p>
//     </div>
//   )
// }

// export default NodeJS
// src/components/pages/NodeJS.jsx
import React from 'react'

const NodeJS = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="text-center mb-4">
        <h1 className="display-4">Node.js Full Course</h1>
        <p className="lead">Master backend development with Node.js – scalable, fast, and modern server-side JavaScript.</p>
        <a
          href="https://nodejs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary mt-3"
        >
          Learn More at Node.js Official Site
        </a>
      </div>

      <div className="card mb-4 shadow">
        <div className="card-body">
          <h4 className="card-title">🧠 What You’ll Learn</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Introduction to Node.js and its architecture</li>
            <li className="list-group-item">Understanding the Event Loop</li>
            <li className="list-group-item">Working with Core Modules (fs, path, http)</li>
            <li className="list-group-item">npm & package management</li>
            <li className="list-group-item">Creating Web Servers</li>
            <li className="list-group-item">Using Express.js framework</li>
            <li className="list-group-item">REST API development</li>
            <li className="list-group-item">MongoDB integration (Mongoose)</li>
            <li className="list-group-item">Authentication & Authorization (JWT)</li>
            <li className="list-group-item">Middleware, Routing, and MVC Architecture</li>
            <li className="list-group-item">Unit Testing with Jest / Mocha</li>
            <li className="list-group-item">Deploying to cloud (Render, Railway, or Heroku)</li>
          </ul>
        </div>
      </div>

      <div className="card mb-4 shadow">
        <div className="card-body">
          <h4 className="card-title">📅 Course Syllabus</h4>
          <ol className="list-group list-group-numbered">
            <li className="list-group-item">Introduction to Node.js & Setup</li>
            <li className="list-group-item">Understanding the Event Loop & Async Patterns</li>
            <li className="list-group-item">Working with Filesystem and Buffers</li>
            <li className="list-group-item">Building a Basic HTTP Server</li>
            <li className="list-group-item">Creating APIs with Express.js</li>
            <li className="list-group-item">Database Integration with MongoDB</li>
            <li className="list-group-item">User Authentication (JWT, bcrypt)</li>
            <li className="list-group-item">Advanced Routing & Middleware</li>
            <li className="list-group-item">Testing APIs with Postman and Jest</li>
            <li className="list-group-item">Error Handling & Validation</li>
            <li className="list-group-item">Environment Variables and .env config</li>
            <li className="list-group-item">Final Project: Build and Deploy a REST API</li>
          </ol>
        </div>
      </div>

      <div className="card shadow">
        <div className="card-body">
          <h4 className="card-title">✅ Prerequisites</h4>
          <ul>
            <li>Basic JavaScript knowledge (ES6+)</li>
            <li>Familiarity with REST concepts and JSON</li>
            <li>Basic command-line usage</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-5">
        <a href="#" className="btn btn-success btn-lg">Enroll Now</a>
      </div>
    </div>
  )
}

export default NodeJS
