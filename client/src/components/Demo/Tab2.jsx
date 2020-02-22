import React from 'react';
import TabTextArea from '../TabTextArea'
import { Input } from '@material-ui/core';
import { Button, Icon } from 'antd';
import KeyButton from './keybutton';




export default function Tab2(props) {



    return (
        <div style={{ width: '60vw', minHeight: 450, backgroundColor: 'white', padding: 10 }} >
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: 10 }} >
                <Input placeholder="Put your url here" className="w-75" allowClear />
                <Button type="primary" ghost style={{ display: 'flex', alignItems: 'center', marginLeft: 10 }}>Filter<Icon type="double-right" /></Button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }} >
                <TabTextArea style={{ width: '27vw' }} placeholder="(っ◔◡◔)っ  Put url up there and then click filter ;)" />
                <div>
                    <KeyButton keypoint={cobaPopUp} />
                    <TabTextArea style={{ width: '27vw' }} minHeight={350} placeholder="The result will shown here ヽ(´▽｀)" />
                </div>
            </div>
        </div>
    )
}



const cobaPopUp = <div style={{ maxWidth: '25vw', maxHeight: 350, height: 290, overflowY: 'auto' }} >
    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd
    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd
    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd
    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd
    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd
    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd
    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd
    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd
    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd
    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd
    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd
    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd
    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd
    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd
    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd
    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd
    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd
    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd
    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd
    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd
    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd
    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd
    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd
    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd
    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd
    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd
    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd
    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd
    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd
    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd
    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd
    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd    asdasd
     </div>