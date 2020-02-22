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
                    <div style={{ width: '100%', height: '40vh', backgroundColor: 'rgb(256,256,256)', marginTop: 230, borderRadius: 30, padding: 15 }}>
                        <p>Test ride</p>
                    </div>
                </div>
            </div>
            <div className="home" >
                <div style={{ marginTop: 50, marginBottom: 50, display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', width: '60vw', height: 555 }} >
                    <DemoHandle />
                </div>
            </div>
            {/* <div style={{ width: 200, height: 40, backgroundColor: 'white', marginTop: 50, display: 'flex', flexDirection: 'row' }}>
                <div style={{ marginTop: 50 }}>
                    <Button >Preset Demo</Button>
                    <Button >Live Demo</Button>
                </div>
            </div> */}

            {/* <div style={{ width: '80vw', minHeight: 450, backgroundColor: 'white', marginBottom: 40, padding: 10 }} >
            </div> */}
        </>
    )
}