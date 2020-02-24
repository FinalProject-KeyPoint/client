import React from 'react';
import { Image } from 'react-bootstrap'

export default function TeamDiv(props) {



    return (
        <div style={{
            ...props.style,
            width: '55%',
            height: 220,
            marginTop: 10,
            backgroundColor: '#e7e7e7',
            display: 'flex',
            padding: 20,
            justifyContent: 'space-around',
            alignItems: 'center'
        }}>
            <div style={{ width: '50%', textAlign: 'center' }} >
                <Image
                    src={props.foto}
                    width={200}
                    height={200}
                    thumbnail
                    roundedCircle
                />
            </div>
            <div style={{ width: '50%', textAlign: 'center' }} >
                <h4>{props.nama}</h4>
                <h6>{props.job}</h6>
                <q>{props.quote}</q>
            </div>
        </div>
    )
}