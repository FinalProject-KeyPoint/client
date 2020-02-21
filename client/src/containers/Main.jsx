import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import DemoHandle from '../components/Demo/DemoHandle';

import '../style/main.css'

export default function Main(props) {


    return (
        <>
            <Navbar />
            <div className="induk" >
                <div style={{ padding: 100, height: '60%', zIndex: -10, }}>
                    <div style={{ width: '100%', height: '40vh', backgroundColor: 'rgb(256,256,256,0.5)' }}>
                        <p>Test ride</p>

                    </div>
                </div>

            </div>
            <div className="home" >
                <div style={{ width: '80vw', minHeight: 450, backgroundColor: 'white', marginTop: 50, marginBottom: 40, padding: 10 }} >
                    <DemoHandle />
                </div>
            </div>
        </>
    )
}