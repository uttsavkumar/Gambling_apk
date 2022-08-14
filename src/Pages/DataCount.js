import React from 'react'
import p1 from '../Images/p1.png'
import p2 from '../Images/p2.svg'
import p3 from '../Images/p3.svg'
import p4 from '../Images/p4.svg'
import counter from '../Images/counterup.png'
const DataCount = () => {
    return (
        <>
                <div className="container mt-4">
                    <div className="row align-items-center">
                        <div className="col-lg-5 d-none d-lg-block mt-2">
                            <div className="images">
                                <img src={counter} alt="img" />
                            </div>
                        </div>
                        <div className="col-lg-7 mt-5">
                            <div className="row">
                                <div className="col-6 mt-5">
                                    <div className="item">
                                        <img className='mb-3' src={p1} alt="img" />
                                        <h5 >Total Members</h5>
                                        <h3 className="priceColor">545,965</h3>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="item">
                                        <img className='mb-3' src={p2} alt="img" />
                                        <h5>Total Profits</h5>
                                        <h3>$<span className="priceColor">54,585</span></h3>
                                    </div>
                                </div>
                                <div className="col-6 mb-3">
                                    <div className="item">
                                        <img className='mb-3' src={p3} alt="img" />
                                        <h5>Total Transaction</h5>
                                        <h3><span className="priceColor">280</span>+</h3>
                                    </div>
                                </div>
                                <div className="col-6" style={{ marginTop:-25 }}>
                                    <div className="item ">
                                        <img className='mb-3' src={p4} alt="img" />
                                        <h5>Total Deposited</h5>
                                        <h3>$<span className="priceColor">12,275,535</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default DataCount