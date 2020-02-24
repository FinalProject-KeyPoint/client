import React from 'react';
import PresetCard from './PresetCard';
import Detik from '../../assets/web/detik.png';
import Cnbc from '../../assets/web/cnbc.png';
import Cnn from '../../assets/web/cnn.png';
import Kompas from '../../assets/web/kompas.png';
import Tribun from '../../assets/web/tribunnews_v2.png';
import '../../style/presetTemplate.css'
// import '../../style/Tab1.css'


export default function PresetTemplate(props) {


    return (
        <div className="boxCon">
            {
                dataFake.map((data, i) => <PresetCard key={i} data={data} />)
            }
        </div>
    )
}

const dataFake = [
    {
        url: '',
        image: Detik
    },
    {
        url: '',
        image: Cnbc
    },
    {
        url: '',
        image: Cnn
    },
    {
        url: '',
        image: Kompas
    },
    {
        url: '',
        image: Tribun
    }
]