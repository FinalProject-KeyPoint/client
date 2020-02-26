import React, { useState, useEffect } from 'react';
import '../../style/demoPreset.css';
import TopPreset from './TopPreset';
import BoxPreset from './BoxPreset';
import {
    Cnn, Tribun, Tempo, Kompas, Liputan, Okezone, Detik
} from './preset.js'
import DropDownPreset from './DropDownPreset';

export default function DemoPreset(props) {
    const [active, setActive] = useState('Liputan')
    const [showData, setShowData] = useState(Liputan)
    const [showOrigin, setShowOrigin] = useState(false)


    useEffect(() => {
        setShowData(switchingData(active))
        // console.log(showData);
    }, [active])

    return (
        <div className="DemoPreset" >
            <div style={{ padding: 25 }} >
                <div style={{ width: '100%', padding: 15, margin: 20 }} >
                    <TopPreset setActive={setActive} active={active} setShowOrigin={setShowOrigin} />
                    <div className="dropDownLink" >
                        <DropDownPreset showData={showData} setActive={setActive} active={active} setShowOrigin={setShowOrigin} />
                    </div>
                </div>
                <BoxPreset showData={showData} showOrigin={showOrigin} setShowOrigin={setShowOrigin} />
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