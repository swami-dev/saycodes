// // src/components/pages/ReactC.jsx
// import React from 'react'

// const ReactC = () => {
//   return (
//     <div className="container mt-5">
//       <h2>React Course</h2>
//       <p>Learn the basics of React.js, components, state, props, and more.</p>
//     </div>
//   )
// }

// export default ReactC
// src/components/pages/ReactC.jsx
import React from 'react'

const ReactC = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="text-center mb-4">
        <h1 className="display-4">React Full Course</h1>
        <p className="lead">Master React.js from beginner to advanced. Build modern web applications with ease.</p>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-3">
          Go Deeper at React.dev
        </a>
      </div>

      <div className="card mb-4 shadow">
        <div className="card-body">
          <h4 className="card-title">📘 What You’ll Learn</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">JSX and Virtual DOM</li>
            <li className="list-group-item">Functional Components & Class Components</li>
            <li className="list-group-item">Props, State, and Lifecycle Methods</li>
            <li className="list-group-item">React Router for navigation</li>
            <li className="list-group-item">Forms and Input Handling</li>
            <li className="list-group-item">Hooks (useState, useEffect, useContext, useRef, useReducer)</li>
            <li className="list-group-item">Context API for global state</li>
            <li className="list-group-item">Performance Optimization</li>
            <li className="list-group-item">React Query / Data Fetching</li>
            <li className="list-group-item">Working with APIs and Axios</li>
            <li className="list-group-item">Project structure and best practices</li>
            <li className="list-group-item">Deploying your React App</li>
          </ul>
        </div>
      </div>

      <div className="card mb-4 shadow">
        <div className="card-body">
          <h4 className="card-title">📅 Course Syllabus</h4>
          <ol className="list-group list-group-numbered">
            <li className="list-group-item">Introduction to React</li>
            <li className="list-group-item">Creating Your First React App</li>
            <li className="list-group-item">JSX Deep Dive</li>
            <li className="list-group-item">Component Architecture</li>
            <li className="list-group-item">Managing State and Props</li>
            <li className="list-group-item">Routing with React Router</li>
            <li className="list-group-item">Using Forms & Controlled Components</li>
            <li className="list-group-item">Advanced React Hooks</li>
            <li className="list-group-item">Global State with Context API</li>
            <li className="list-group-item">Calling APIs with Fetch and Axios</li>
            <li className="list-group-item">React Performance & Lazy Loading</li>
            <li className="list-group-item">Building & Deploying a Project</li>
          </ol>
        </div>
      </div>

      <div className="card shadow">
        <div className="card-body">
          <h4 className="card-title">✅ Prerequisites</h4>
          <ul>
            <li>Basic understanding of HTML, CSS, and JavaScript</li>
            <li>Familiarity with ES6+ features like arrow functions, destructuring, etc.</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-5">
        <a href="#" className="btn btn-success btn-lg">Enroll Now</a>
      </div>
    </div>
  )
}

export default ReactC
