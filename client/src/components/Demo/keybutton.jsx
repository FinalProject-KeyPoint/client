import React from 'react';
import { Popover, Button } from 'antd';

export default function KeyButton(props) {

    return (
        <Popover trigger="click" title="KeyPoint" placement="bottom" content={props.keypoint} >
            <Button block type="primary" style={{ marginLeft: 3, marginBottom: 5 }} >Show KeyPoint</Button>
        </Popover>
    )
}