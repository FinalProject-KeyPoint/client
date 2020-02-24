import React from 'react';
import { Input } from '@material-ui/core';
import { Form } from 'react-bootstrap';
import { Button, Icon } from 'antd';
export default function NewDemoLive(props) {


    return (
        <div style={{ height: '70vh', marginRight: 50, width: '60vw', padding: 20, display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }} >
                <Input placeholder="Put your url here" className="w-75" />
                <Button type="primary" ghost style={{ display: 'flex', alignItems: 'center', marginLeft: 10 }}>Filter<Icon type="double-right" /></Button>
            </div>
            <div style={{ height: '100%' }} >
                <Form.Control
                    as="textarea"
                    placeholder="(っ◔◡◔)っ  Put url up there and then click filter ;)"
                    style={{ flex: 2, borderWidth: 0.5, borderColor: '#349eeb', resize: 'none', overflow: 'auto', margin: 10, padding: 15 }}
                    className="mx-1 h-100"
                    readOnly={true} /> {/* outline on focus */}
            </div>
        </div>
    )
}