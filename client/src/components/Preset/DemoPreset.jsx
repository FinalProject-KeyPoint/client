import React, { useState, useEffect } from 'react';
import '../../style/demoPreset.css';
import TopPreset from './TopPreset';
import {
    Cnn, Tribun, Tempo, Kompas, Liputan, Okezone, Detik
} from './preset.js'
import { Icon } from 'antd';

export default function DemoPreset(props) {
    const [active, setActive] = useState('Liputan')
    const [showData, setShowData] = useState(Liputan)

    useEffect(() => {
        setShowData(switchingData(active))
        console.log(showData);
    }, [active])

    return (
        <div className="DemoPreset" >
            <div style={{ padding: 25 }} >
                <div style={{ width: '100%', padding: 15, margin: 20 }} >
                    <TopPreset setActive={setActive} active={active} />
                </div>
                {active + ' ini yang lagi active'} <br></br>
                {JSON.stringify(showData)} <br />
                <div style={{ width: '100%', height: 485, display: 'flex', marginTop: 20, flexDirection: 'column' }} >
                    <div style={{ display: 'flex' }} >
                        <div style={{ userSelect: 'none', width: '70%', height: 80, backgroundColor: 'white', fontSize: '1.2rem', padding: 10, display: 'flex', alignItems: 'center', overflowY: 'auto' }} >
                            {showData.title}{showData.title}{showData.title}{showData.title}{showData.title}
                        </div>
                        <div style={{ height: 80, width: '5%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '1px solid gray' }} >
                            <span style={{ display: 'none' }}>Tooltip text</span>
                            <Icon type="copy" style={{ fontSize: '2.9em' }} />
                            copy url
                        </div>
                    </div>
                    <div style={{ height: 350, width: '100%', backgroundColor: 'white', marginTop: 20 }} >
                        {showData.filtered}
                    </div>
                </div>
            </div>
        </div>
    )
}

function switchingData(data) {
    switch (data) {
        case "Cnn":
            return Cnn
        case "Tribun":
            return Tribun
        case "Tempo":
            return Tempo
        case "Kompas":
            return Kompas
        case "Liputan":
            return Liputan
        case "Okezone":
            return Okezone
        case "Detik":
            return Detik
        default:
            break;
    }
}