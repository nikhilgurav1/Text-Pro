import React from 'react';
import { Link } from 'react-router-dom';



export default function Navbar(props) {
  return (
    <div>
      
      <>

    

    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.mode === 'light' ? 'black': 'white'} mx-4`} htmlFor="flexSwitchCheckDefault">{props.mode === 'dark' ? 'Light Mode' : 'Dark Mode'}</label>
</div>
    {/* <button className={`navbar-toggler text-${props.mode === 'light' ? 'black': 'white'}`}  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    <button className={`navbar-toggler ${props.mode === 'light' ? 'navbar-light' : 'navbar-dark'}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  {/* <span className="navbar-toggler-icon"></span> */}
</button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`btn btn-outline-success text-${props.mode === 'light' ? 'black': 'white'} mx-1`} aria-current="page" to="/home">{props.home}</Link>
          </li>
      </ul>
    <Link className={`btn btn-outline-success text-${props.mode === 'light' ? 'black': 'white'} mx-1`} aria-current='page' to='/about'>{props.AboutUs}</Link>
      <Link className={`btn btn-outline-success text-${props.mode === 'light' ? 'black': 'white'} mx-1`} aria-current='page' to='/login'>{props.login}</Link>
      <Link className={`btn btn-outline-success text-${props.mode === 'light' ? 'black': 'white'} mx-1`} aria-current='page' to='/register'>{props.register}</Link>

    </div>
  </div>
</nav>


  </>
    </div>
  )
}
