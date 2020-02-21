import React from 'react'
import NewDemo from '../components/demo/NewDemo';
import Navbar from '../components/Navbar';
import backImage from '../assets/background.jpeg';

export default function LandingPage(props) {


    return (
        <div style={{ backgroundColor: '#e8e8e8' }} >
            <Navbar />
            <div style={{ backgroundImage: `url("${backImage}")`, height: 600, width: '100vw', zIndex: -10 }} >
                {/* <Image src={backImage} style={{ height: 400, width: '100vw', zIndex: -10, opacity: 1 }} /> */}
            </div>
            <div >
                <div style={{ zIndex: 10, opacity: 1 }}>
                    <div className="w-75 mx-auto mb-4" style={{ backgroundColor: 'white', height: 365, marginTop: -100, padding: 20 }} >
                        ters
                    </div>
                    <NewDemo />
                    <div className="w-75 mx-auto" style={{ backgroundColor: 'white', height: 365, padding: 20 }} >
                        ters
                    </div>
                    {/* <DemoPage /> */}
                </div>
            </div>
        </div>
    )
}