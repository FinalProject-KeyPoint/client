import React from 'react';
// import { Button } from 'react-bootstrap';


export default function PresetCard(props) {



    return (
        // <Button>
        <div style={{ width: '9vw', height: 50, margin: 15, cursor: 'pointer' }} onClick={() => alert('hello ' + props.data.image)} >
            <img src={props.data.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </div>
        // </Button>
    )
}