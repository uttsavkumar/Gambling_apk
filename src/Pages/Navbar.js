import React from 'react'
import logo from '../Images/logo.png'
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light mt-lg-3" style={{ borderRadius: 15 }}>
                <div className="container-fluid p-lg-1">
                    <img src={logo} alt="" srcset=""className='ms-2' />
                <Link to={'/signup'} className='btn btn-warning me-md-2 text-white' style={{ width: 160, height: 50, borderRadius: 15, fontSize: 20 }}>Sign Up</Link>
                </div>
            </nav>

        </>
    )
}

export default Navbar