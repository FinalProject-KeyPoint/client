import React from 'react'
import { Form } from 'react-bootstrap';
// import shadows from '@material-ui/core/styles/shadows';

export default function TabTextArea(props) {

    return (
        <div style={props.style} >
            {/* {minHeight: 450, marginLeft: -6, width: '100%' } */}
            <Form.Control
                as="textarea"
                placeholder={props.placeholder}
                // placeholder="(っ◔◡◔)っ  Put url up there and then click filter ;)"
                className="mx-1 aturTextArea"
                readOnly={true}
                style={{
                    flex: 2,
                    borderWidth: 0.5,
                    borderColor: '#349eeb',
                    resize: 'none',
                    overflow: 'auto',
                    minHeight: props.minHeight,
                    height: '100%',
                    padding: 15,
                    fontSize: '0.8em',
                }}
            /> {/* outline on focus */}
        </div>
    )
}