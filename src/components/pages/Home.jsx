// import React from 'react'

// const Home = () => {
//   return (
//     <div>Home</div>
//   )
// }

// export default Home


// src/components/pages/Home.jsx
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="display-4">Resources - Development to Deployment</h1>
        <p className="lead"> </p>
      </div>

      <div className="row g-4">
        {/* React Course */}
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h5 className="card-title">React.js</h5>
              <p className="card-text">
                Learn how to build dynamic user interfaces with React, components, hooks, and modern JavaScript.
              </p>
              <Link to="/react" className="btn btn-primary">Explore React</Link>
            </div>
          </div>
        </div>

        {/* Node.js Course */}
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow">
            <div className="card-body  ">
              <h5 className="card-title">Node.js</h5>
              <p className="card-text">
                Build scalable backend applications using Node.js, Express, and RESTful APIs.
              </p>
              <Link to="/nodejs" className="btn btn-success">Explore Node.js</Link>
            </div>
          </div>
        </div>

        {/* Python Course */}
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h5 className="card-title">Python</h5>
              <p className="card-text">
                Start your programming journey with Python – ideal for automation, data science, and web development.
              </p>
              <Link to="/python" className="btn btn-warning">Explore Python</Link>
            </div>
          </div>
        </div>

        {/* Django Course */}
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h5 className="card-title">Django</h5>
              <p className="card-text">
                Learn Django to create secure, powerful web applications using Python and the Django framework.
              </p>
              <Link to="/django" className="btn btn-dark">Explore Django</Link>
            </div>
          </div>
        </div>

        {/* Django Course */}
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h5 className="card-title">Linux</h5>
              <p className="card-text">
                Learn Django to create secure, powerful web applications using Python and the Django framework.
              </p>
              <Link to="/django" className="btn btn-dark">Explore Linux</Link>
            </div>
          </div>
        </div>




                {/* Django Course */}
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h5 className="card-title">Networking</h5>
              <p className="card-text">
                Learn Django to create secure, powerful web applications using Python and the Django framework.
              </p>
              <Link to="/django" className="btn btn-dark">Explore Network</Link>
            </div>
          </div>
        </div>



      </div>




      <div className="text-center mt-5">
        <p>👨‍💻 Ready to become a full stack developer?</p>
        <Link to="/react" className="btn btn-outline-primary btn-lg">Start Learning Now</Link>
      </div>
    </div>
  )
}

export default Home
