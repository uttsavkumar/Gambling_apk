import React from 'react'
import DataCount from './DataCount'
import Download from './Download'
import DownloadStep from './DownloadStep'
import Footer from './Footer'
import HowWeWork from './HowWeWork'
import Navbar from './Navbar'

const LandingPage = () => {
    return (
        <>
            <div className="container-fluid" style={{ backgroundColor: '#523680', padding: 30 }}>
                <Navbar />
                <Download/>
            </div>
            <div className="container">
                <HowWeWork/>
                <DataCount/>
                <DownloadStep/>
            </div>
            <div className="container-fluid mt-5" style={{ backgroundColor: '#523680', padding: 30,color:'white' }}>
            <Footer/>
            </div>

        </>
    )
}

export default LandingPage