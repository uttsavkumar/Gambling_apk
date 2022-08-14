import React from 'react'
import logo from '../Images/logo.png'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-sm-6 p-2">
                        <div className="left">
                            <a href="" className="logo"><img src={logo} alt="img" /></a>
                            <p style={{ lineHeight: 1.7 }}>MoneyPro have much planned for the future,
                                working with great clients and continued
                                blockchain investment. If you'd like to invest our company, then we'd also love to hear from you.</p>
                            <div className=''>
                                <Link to={'/'} style={{ color: 'white' }}><i class="bi bi-twitter me-3" style={{ fontSize: 30 }}></i></Link>
                                <Link to={'/'} style={{ color: 'white' }}><i class="bi bi-instagram me-3" style={{ fontSize: 30 }}></i></Link>
                                <Link to={'/'} style={{ color: 'white' }}><i class="bi bi-facebook me-3" style={{ fontSize: 30 }}></i></Link>
                                <Link to={'/'} style={{ color: 'white' }}><i class="bi bi-whatsapp me-3" style={{ fontSize: 30 }}></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-6 p-2">
                        <h3>Useful Link</h3>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Link to={'/'} style={{ color: 'white' }}><span style={{ fontSize: 15 }}>lorem</span></Link>
                            <Link to={'/'} style={{ color: 'white' }}><span style={{ fontSize: 15 }}>lorem</span></Link>
                            <Link to={'/'} style={{ color: 'white' }}><span style={{ fontSize: 15 }}>lorem</span></Link>
                            <Link to={'/'} style={{ color: 'white' }}><span style={{ fontSize: 15 }}>lorem</span></Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 p-2">
                        <h3>Contact Info</h3>
                        <p>address here or email or phone no</p>
                    </div>
                    <div className="col-lg-3 col-sm-6 p-2">
                        <h3>Download Apk</h3>
                        <button className='btn btn-warning text-white w-100 mt-1' style={{ height: 54, borderRadius: 20, fontSize: 20 }}>Download App</button>

                    </div>
                </div>
            </div>

            <div className="container mb-5">
                <hr />
                <div className="text-center">
                    <span>Copyright © <a href="#" className='text-white'>MoneyPro</a> 2021. All rights reserved</span>
                </div>
            </div>


        </>
    )
}

export default Footer