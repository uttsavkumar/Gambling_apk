import React from 'react'
import img from '../Images/img.png'
const Download = () => {

    return (
        <>
            <div className="container p-4 mt-5" style={{ marginLeft: -8 }}>
                <div className="row">
                    <div className="col-md-7 col-12">
                        <h5 className='text-white'>We have 24/7 supported team</h5>
                        <div>
                            <h3 className='text-white mt-2'>Safe Money with MoneyPro Since 2011</h3>
                        </div>
                        <div>
                            <p className='text-white mt-4'>MoneyPro is an investment company, whose team is working on making money from the volatility of cryptocurrencies and offer great returns to our clients.</p>
                        </div>
                        {/* Download Now Button */}
                        <div className="col-md-6 ">
                            <button className='btn btn-warning text-white w-100 mt-5' style={{ height: 54, borderRadius: 20, fontSize: 20 }}>Download App</button>
                        </div>
                    </div>
                    <div className="col-md-5 col-sm-6 d-none d-md-block">
                        <img src={img} alt="" srcset="" className='card-img-top' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Download