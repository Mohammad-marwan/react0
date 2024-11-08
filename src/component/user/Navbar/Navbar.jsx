import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../context/User.jsx'
export default function Navbar() {
  const  {isLogin,userData}  = useContext(UserContext);
  return (
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        {isLogin?
        <>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        </>
        :
        <>
        <li className="nav-item">
          <Link className="nav-link" to={'/Login'}>Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/Register'}>Register</Link>
        </li>
        </>
        }
        
        
      </ul>
    </div>
  </div>
</nav>

  )
}
