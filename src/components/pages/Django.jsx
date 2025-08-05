// import React from 'react'

// const Django = () => {
//   return (
//     <div>Django</div>
//   )
// }

// export default Django


// src/components/pages/Django.jsx
import React from 'react'

const Django = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="text-center mb-4">
        <h1 className="display-4">Django Full Course</h1>
        <p className="lead">Build robust and scalable web applications with Django – the high-level Python web framework.</p>
        <a
          href="https://docs.djangoproject.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary mt-3"
        >
          Go to Django Documentation
        </a>
      </div>

      <div className="card mb-4 shadow">
        <div className="card-body">
          <h4 className="card-title">📘 What You’ll Learn</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Django architecture and project structure</li>
            <li className="list-group-item">Creating views, templates, and models</li>
            <li className="list-group-item">Working with the Django ORM</li>
            <li className="list-group-item">Routing and URL configuration</li>
            <li className="list-group-item">CRUD operations</li>
            <li className="list-group-item">Forms and validation</li>
            <li className="list-group-item">User authentication and sessions</li>
            <li className="list-group-item">Admin dashboard customization</li>
            <li className="list-group-item">Working with static and media files</li>
            <li className="list-group-item">REST APIs with Django REST Framework</li>
            <li className="list-group-item">Deployment with Gunicorn, Nginx, and cloud platforms</li>
          </ul>
        </div>
      </div>

      <div className="card mb-4 shadow">
        <div className="card-body">
          <h4 className="card-title">📅 Course Syllabus</h4>
          <ol className="list-group list-group-numbered">
            <li className="list-group-item">Introduction to Django and Setup</li>
            <li className="list-group-item">Creating Your First Django Project</li>
            <li className="list-group-item">Understanding URL Routing and Views</li>
            <li className="list-group-item">Templates and Static Files</li>
            <li className="list-group-item">Models and Django ORM</li>
            <li className="list-group-item">CRUD Operations</li>
            <li className="list-group-item">Using Django Forms</li>
            <li className="list-group-item">User Authentication & Authorization</li>
            <li className="list-group-item">Admin Interface and Customization</li>
            <li className="list-group-item">REST APIs with Django REST Framework</li>
            <li className="list-group-item">Project: Blog or To-Do App with REST API</li>
            <li className="list-group-item">Testing & Debugging</li>
            <li className="list-group-item">Deployment to Render or DigitalOcean</li>
          </ol>
        </div>
      </div>

      <div className="card shadow">
        <div className="card-body">
          <h4 className="card-title">✅ Prerequisites</h4>
          <ul>
            <li>Basic Python knowledge</li>
            <li>HTML/CSS fundamentals</li>
            <li>Basic understanding of databases (SQLite/PostgreSQL)</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-5">
        <a href="#" className="btn btn-success btn-lg">Enroll Now</a>
      </div>
    </div>
  )
}

export default Django
