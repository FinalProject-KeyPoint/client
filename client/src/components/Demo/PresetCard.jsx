import React from 'react';
// import { Button } from 'react-bootstrap';


export default function PresetCard(props) {



    return (
        // <Button>
        <div className='cardTemplate' onClick={() => alert('hello ' + props.data.image)} >
            <img src={props.data.image} alt="" />
        </div>
        // </Button>
    )
}