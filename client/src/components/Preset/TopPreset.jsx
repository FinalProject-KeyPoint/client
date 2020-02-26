import React from 'react';
import { Image, Button } from 'react-bootstrap'

import Detik from '../../assets/web/detik.png';
import Cnn from '../../assets/web/cnn.png';
import Kompas from '../../assets/web/kompas.png';
import Tribun from '../../assets/web/tribunnews_v2.png';
import Liputan from '../../assets/web/liputan6.png';
import Okezone from '../../assets/web/okezone.webp';
import Tempo from '../../assets/web/tempo.png';
import '../../style/presetNew.css'
import '../../style/demoPreset.css';

export default function TopPreset(props) {


    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }} >
            <Button
                variant="outline-dark" className={props.active === 'Cnn' ? "active theLogo" : 'logoImageButton theLogo'}
                onClick={() => {
                    props.setActive('Cnn')
                    props.setShowOrigin(false)
                }}
            >
                <Image src={Cnn} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </Button>
            <Button
                variant="outline-dark" className={props.active === 'Detik' ? "active theLogo" : 'logoImageButton theLogo'}
                onClick={() => {
                    props.setActive('Detik')
                    props.setShowOrigin(false)
                }}
            >
                <Image src={Detik} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </Button>
            <Button
                variant="outline-dark" className={props.active === 'Kompas' ? "active theLogo" : 'logoImageButton theLogo'}
                onClick={() => {
                    props.setActive('Kompas')
                    props.setShowOrigin(false)
                }}
            >
                <Image src={Kompas} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </Button>
            <Button
                variant="outline-dark" className={props.active === 'Liputan' ? "active theLogo" : 'logoImageButton theLogo'}
                onClick={() => {
                    props.setActive("Liputan")
                    props.setShowOrigin(false)
                }}
            >
                <Image src={Liputan} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </Button>
            <Button
                variant="outline-dark" className={props.active === 'Okezone' ? "active theLogo" : 'logoImageButton theLogo'}
                onClick={() => {
                    props.setActive('Okezone')
                    props.setShowOrigin(false)
                }}
            >
                <Image src={Okezone} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </Button>
            <Button
                variant="outline-dark" className={props.active === 'Tempo' ? "active theLogo" : 'logoImageButton theLogo'}
                onClick={() => {
                    props.setActive("Tempo")
                    props.setShowOrigin(false)
                }}
            >
                <Image src={Tempo} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </Button>
            <Button
                variant="outline-dark" className={props.active === 'Tribun' ? "active theLogo" : 'logoImageButton theLogo'}
                onClick={() => {
                    props.setActive('Tribun')
                    props.setShowOrigin(false)
                }}
            >
                <Image src={Tribun} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </Button>
        </div>
    )
}