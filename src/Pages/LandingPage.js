import React, { useEffect, useState } from 'react'
import DataCount from './DataCount'
import Download from './Download'
import DownloadStep from './DownloadStep'
import Footer from './Footer'
import HowWeWork from './HowWeWork'
import Navbar from './Navbar'

const LandingPage = () => {
    const [y, setY] = useState(window.scrollY);

    const handleNavigation = (e) => {
        const window = e.currentTarget;
        if (y > window.scrollY) {
            console.log(y);
        } else if (y < window.scrollY) {
            console.log(y);
        }
        setY(window.scrollY);
    };
    useEffect(() => {
        window.addEventListener("scroll", (e) => handleNavigation(e));

        return () => {
            window.removeEventListener("scroll", (e) => handleNavigation(e));
        };
    }, [y]);
    return (
        <>
            <div className="container-fluid" style={{ backgroundColor: '#523680', padding: 30 }}>
                <Navbar />
                <Download />
            </div>
            <div className="container">
                <HowWeWork />
                <DataCount />
                <DownloadStep />
            </div>
            <div className="container-fluid mt-5" style={{ backgroundColor: '#523680', padding: 30, color: 'white' }}>
                <Footer />

            </div>

            {
                y > 300 ?
                    <div className="container-fluid">
                        <div className="row">
                            <div style={{ position: 'fixed', bottom: 0 }}>
                                <div className="col-12">
                                    <button className='btn btn-warning text-white w-100 mt-5' style={{ height: 60, fontSize: 20 }}>Download App</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    null
            }
        </>
    )
}

export default LandingPage