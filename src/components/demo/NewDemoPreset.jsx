import React from 'react';
import { Form } from 'react-bootstrap';
import ChoosePreset from './ChoosePreset';

export default function NewDemoPreset(props) {


    return (
        <div style={{ height: '70vh', marginRight: 50, width: '60vw', padding: 20, display: 'flex' }}>
            {/* <span style={{ flex: 1, backgroundColor: 'gray', borderWidth: 2, borderColor: 'black' }} >tetetetetes</span> */}
            <ChoosePreset />
            <Form.Control as="textarea" style={{ flex: 2, borderWidth: 0.5, borderColor: '#349eeb', resize: 'none', overflow: 'auto' }} className="mx-1" readOnly={true} /> {/* outline on focus */}
            <Form.Control as="textarea" style={{ flex: 2, borderWidth: 0.5, borderColor: '#349eeb', resize: 'none', overflow: 'auto' }} readOnly={true} /> {/* outline on focus */}
        </div>
    )
}