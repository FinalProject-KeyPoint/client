import React from 'react';
import Detik from '../../assets/web/detik.png';
import Cnn from '../../assets/web/cnn.png';
import Kompas from '../../assets/web/kompas.png';
import Tribun from '../../assets/web/tribunnews_v2.png';
import Liputan from '../../assets/web/liputan6.png';
import Okezone from '../../assets/web/okezone.webp';
import Tempo from '../../assets/web/tempo.png';
import { Image } from 'react-bootstrap'
import '../../style/demoPreset.css';

export default function TopPreset(props) {


    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }} >
            <div style={{ width: 100, height: 50 }} >
                <Image src={Cnn} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <div style={{ width: 100, height: 50, marginTop: 50 }} >
                <Image src={Detik} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <div style={{ width: 100, height: 50 }} >
                <Image src={Kompas} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <div style={{ width: 100, height: 50, marginTop: 50 }} >
                <Image src={Liputan} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <div style={{ width: 100, height: 50 }} >
                <Image src={Okezone} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <div style={{ width: 100, height: 50, marginTop: 50 }} >
                <Image src={Tempo} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <div style={{ width: 100, height: 50 }} >
                <Image src={Tribun} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
        </div>
    )
}