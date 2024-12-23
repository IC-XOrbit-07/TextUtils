import React from 'react'
import PropTypes from 'prop-types'
// import {a} from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.currentTheme}>
        <div className="container-fluid">
            <a className="navbar-brand" href="#">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-a active" aria-current="page" href="#">Home</a>
                </li>
                {/* <li className="nav-item">
                <a className="nav-a" href="/about">{props.aboutText}</a>
                </li> */}
            </ul>
            {/* <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-primary text-dark" type="submit">Search</button>
            </form> */}
            <div className="form-check form-switch">
              <input className="form-check-input" onClick={props.colorToggler} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              {/* <label className="form-check-label text-dark" htmlFor="flexSwitchCheckDefault">Change theme</label>  */}
              <label className={`form-check-label text-${props.currentTheme === 'dark' ? 'light' : 'dark'}`} htmlFor="flexSwitchCheckDefault">Change theme</label>

            </div>
            </div>
        </div>
        </nav>
    </div>
  )
}

// Proptypes and deafult props are removed from react after v19 ~ V19 Upgrade

Navbar.propTypes = {
  title: PropTypes.string.isRequired , // isRequired also depriciated
  aboutText: PropTypes.string
}

Navbar.defaultProps = {
  title: "Default title here",
  aboutText: "Default About Text"
};

// Depreciated above 2 proptypes