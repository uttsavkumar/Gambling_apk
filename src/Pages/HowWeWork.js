import React from 'react'
import money from '../Images/money.svg'
import account from '../Images/account.svg'
import profit from '../Images/profit.svg'
import arrow1 from '../Images/arrow1.svg'
import arrow2 from '../Images/arrow2.svg'
const HowWeWork = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                     <h6 className=''><span style={{ height: 3, width: 50, backgroundColor: 'red' }}></span>How we work</h6>
                        <h2>How It Works</h2>
                        <div className="col-md-8 mx-auto mt-4">
                            <p>Varius aliquet nulla quibusdam eu odio natus wisi eget, lectus Nam consequuntur urna lectus commodo laboriosam Ridiculus lectus laboriosam.</p>
                        </div>
                    </div>

                    <div className="row mt-2">
                        <div className="col-md-4 mt-4">
                            <div className="text-center">
                                <div className="icon">
                                    <img src={account} alt="img" className='ms-2' />
                                </div>
                                <h3 style={{ marginTop:-10 }}>Register An Account</h3>
                                <p>Create a new account to work  that strategy by building out your existing account.</p>
                               
                            </div>
                        </div>
                        <div className="col-md-4 mt-4">
                            <div className="text-center">
                                <div className="icon icon1">
                                    <img src={money} alt="img" />
                                </div>
                                <h3 style={{ marginTop:-10 }}>Invest Your Money</h3>
                                <p>Create a new account to work  that strategy by building out your existing account.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mt-4">
                            <div className="text-center">
                                <div className="icon icon2">
                                    <img src={profit} alt="img" />
                                </div>
                                <h3 style={{ marginTop:-10 }}>Get Smart Profit</h3>
                                <p>Create a new account to work  that strategy by building out your existing account.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default HowWeWork