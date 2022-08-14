import React from 'react'

const DownloadStep = () => {
    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2>Steps to download the apk</h2>
                        <div className="col-md-8 mx-auto mt-4">
                            <p>Varius aliquet nulla quibusdam eu odio natus wisi eget, lectus Nam consequuntur urna lectus commodo laboriosam Ridiculus lectus laboriosam.</p>
                        </div>
                    </div>
                   
                </div>
                <div className="row mt-5">
                <div className="col-3 col-sm-2">
                        <div className='steps'>1</div>
                    </div>
                    <div className="col-8 col-sm-10">
                        <h4>Start Download</h4>
                        <h6>Click OK to download app. Compatiable with android 5.1 & above.</h6>
                    </div>

                </div>
                <div className="row">
                    <div className="col-3 col-sm-2">
                        <div className='steps step2'>2</div>
                    </div>
                    <div className="col-8 col-sm-10">
                        <h4>Open File</h4>
                        <h6>Open the downloaded APK file to start install</h6>
                    </div>

                </div>
                <div className="row">
                    <div className="col-3 col-sm-2">
                        <div className='steps step3'>3</div>
                    </div>
                    <div className="col-8 col-sm-10">
                        <h4>Allow Unknown Sources</h4>
                        <h6>Go to setting and allow app install from sources othan than playstore. Its's 100% safe!</h6>
                    </div>

                </div>
                <div className="row">
                    <div className="col-3 col-sm-2">
                        <div className='steps step4'>4</div>
                    </div>
                    <div className="col-8 col-sm-10">
                        <h4>Install & Play</h4>
                        <h6>Install the app ,open it in your phone and start playing.That's it!</h6>
                    </div>

                </div>
            </div>
        </>
    )
}

export default DownloadStep