import React from 'react';
import TabTextArea from '../TabTextArea'
import { Input } from '@material-ui/core';
import { Button, Icon } from 'antd';
import KeyButton from './keybutton';
import '../../style/Tab1.css'



export default function Tab2(props) {



    return (
        <div className="tabTwo" >
            <div className="tabTwoDivSatu" >
                <Input placeholder="Put your url here" className="w-75" />
                <Button type="primary" ghost style={{ display: 'flex', alignItems: 'center', marginLeft: 10 }}>Filter<Icon type="double-right" /></Button>
            </div>
            <div className="tabTowDivTwo tabDua" >
                <TabTextArea style={{ width: '27vw', height: 450 }} minHeight={250} placeholder="(っ◔◡◔)っ  Put url up there and then click filter ;)" />
                <div className="tabTwoHandle dalamtabDua" >
                    <KeyButton keypoint={cobaPopUp} />
                    <TabTextArea style={{ width: '27vw', height: 413 }} minHeight={220} placeholder="The result will shown here ヽ(´▽｀)" />
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