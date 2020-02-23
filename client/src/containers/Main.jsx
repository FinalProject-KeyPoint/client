import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import DemoHandle from '../components/Demo/DemoHandle';
// import KeyPoint from '../assets/keypoint.png'
import Why from '../components/WhyKeyPoint';
import Meet from '../components/About/Meet';

import '../style/main.css'

export default function Main(props) {


    return (
        <>
            {/* <div className="topDiv" >
                <img src={KeyPoint} alt="" style={{ backgroundColor: 'rgb(235, 235, 235, 0.04)', borderRadius: 15 }} />
            </div> */}
            <Navbar />
            <div className="induk" >
                <div style={{ height: '60%', zIndex: -10, padding: 100 }}>
                    <Why />
                </div>
            </div>
            <div className="home" >
                <div className="handleDemo" >
                    <DemoHandle />
                </div>
            </div>
            <Meet />
            <div style={{ width: '100%', height: 30, backgroundColor: 'black' }} >

            </div>
        </>
    )
}