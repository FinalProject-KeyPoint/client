import React from 'react'
import { Tabs } from 'antd';
import TabTextArea from '../TabTextArea'
import { Input } from '@material-ui/core';
import { Popover, Button, Icon } from 'antd';
import PresetTemplate from './PresetTemplate';
const { TabPane } = Tabs;

export default function DemoHandle(props) {



    return (
        <>
            <Tabs type="card" tabBarStyle={{ marginBottom: 0 }} defaultActiveKey="1" animated={true} >
                <TabPane tab="Preset" key="1">
                    <div style={{ width: '60vw', minHeight: 450, backgroundColor: 'white', padding: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }} >
                        <PresetTemplate />
                        <TabTextArea style={{ width: '20vw', height: 500 }} minHeight={400} placeholder="choose one source on the left ヘ(◕。◕ヘ)" />
                        <div>
                            <Popover trigger="click" title="KeyPoint" placement="bottom" content={cobaPopUp} >
                                <Button block type="primary" style={{ marginLeft: 3, marginBottom: 5 }} >Show KeyPoint</Button>
                            </Popover>
                            <TabTextArea style={{ width: '20vw' }} minHeight={463} placeholder="The result will shown here ヽ(´▽｀)ノ" />
                        </div>
                    </div>
                </TabPane>
                <TabPane tab="Live Demo" key="2">
                    <div style={{ width: '60vw', minHeight: 450, backgroundColor: 'white', padding: 10 }} >
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: 10 }} >
                            <Input placeholder="Put your url here" className="w-75" allowClear />
                            <Button type="primary" ghost style={{ display: 'flex', alignItems: 'center', marginLeft: 10 }}>Filter<Icon type="double-right" /></Button>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }} >
                            <TabTextArea style={{ width: '27vw' }} placeholder="(っ◔◡◔)っ  Put url up there and then click filter ;)" />
                            <div>
                                <Popover trigger="click" title="KeyPoint" placement="bottom" content={cobaPopUp} >
                                    <Button block type="primary" style={{ marginLeft: 3, marginBottom: 5 }} >Show KeyPoint</Button>
                                </Popover>
                                <TabTextArea style={{ width: '27vw' }} minHeight={350} placeholder="The result will shown here ヽ(´▽｀)" />
                            </div>
                        </div>
                    </div>
                </TabPane>
            </Tabs>
        </>
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