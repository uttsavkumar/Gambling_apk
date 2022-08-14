import axios from 'axios';
import React, { useState } from 'react'
import Lottie from "react-lottie";
import signup from '../signup.json'
const SignupPage = () => {
    const[phone,setPhone] = useState(0)
    const[otp,setOtp] = useState(0)
    const[password,setPassword] = useState('')
    const[ref,setRef] = useState('')


    const handleSubmit = () => {
        axios('http://localhost:8000/api/register',{
            method: 'post',
            data: {
               phone,
               password,
               ref
            }
        })
    }
    const handleOtp = () => {
        axios('http://localhost:8000/api/otp',{
            method: 'post',
            data: {
               phone,
            }
        })
    }
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: signup,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return (
        <>
            <div className="container">
                <div className="row">
                    {/* md Screen Animation */}
                    <div className="d-none d-md-block col-md-4 col-lg-5 mx-auto ">
                        <div className='mt-lg-3'>
                            <Lottie options={defaultOptions} height={470} />
                        </div>
                    </div>
                    {/* sm screen animation */}
                    <div className="d-block d-md-none ">
                        <div className='mt-lg-3'>
                            <Lottie options={defaultOptions} height={205} width={205} />
                        </div>
                    </div>

                    <div className="col-12 col-md-8 col-lg-7 mx-auto mt-md-5">
                        <div className="card border-0">
                            <div className="card-body p-4">
                                <h5 style={{ color: '#213ca9', fontSize: 25 }} >Create New Account</h5>
                                <h6 className='ms-1'>Create an account so you can manage your investment</h6>
                                {/* input starts here */}
                                <div className='mt-4'>
                                    <input type="number" onChange={(e) => setPhone(e.target.value)} className="form-control shadow-none border-0" style={{ height: 53, backgroundColor: '#f0f4f7', padding: 20 }} placeholder="Enter Mobile Number" />
                                </div>
                                <div className="mt-3">
                                    <div class="input-group">
                                        <input type="text" onChange={(e) => setOtp(e.target.value)} className="form-control shadow-none border-0" style={{ height: 53, backgroundColor: '#f0f4f7', padding: 20 }} placeholder="Enter OTP" />
                                        <button onClick={handleOtp} class="btn btn-outline border-0 pe-4 font-bold" type="button" style={{ backgroundColor: '#f0f4f7', color: '#213ca9' }} id="button-addon2">Send OTP</button>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <div class="input-group">
                                        <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control shadow-none border-0" style={{ height: 53, backgroundColor: '#f0f4f7', padding: 20 }} placeholder="Password" />
                                        <button class="btn btn-outline border-0 pe-4" type="button" style={{ backgroundColor: '#f0f4f7', fontSize: 27 }} id="button-addon2"><i class="bi bi-eye-slash-fill"></i></button>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <input type="text" onChange={(e) => setRef(e.target.value)} className="form-control shadow-none border-0" style={{ height: 53, backgroundColor: '#f0f4f7', padding: 20 }} placeholder="Referral Code (Optional)" />
                                </div>
                                {/* submit button */}
                                <div style={{ marginTop: 22 }}>
                                    <input type="submit" onClick={handleSubmit} className="form-control shadow-none border-0 text-white" style={{ height: 45, backgroundColor: '#213ca9' }} value="Create Account" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SignupPage