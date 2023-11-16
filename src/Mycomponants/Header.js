import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <div>
       <nav className="navbar navbar-expand-lg bg-secondary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link  className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">Aboute</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">Aboute</Link>
            </li>
          </ul>
          {props.serabar ? <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> : 'No Search bar'}
        </div>
      </div>
    </nav>
    </div>
  )
}
Header.defaultProps={
    serabar:true,
    title:'Todos List'
}

Header.propTypes={
    serabar:PropTypes.bool.isRequired,
    title:PropTypes.string
}

export default Header
