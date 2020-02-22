import React from 'react'
import { Tabs } from 'antd';
import TabTextArea from '../TabTextArea'
import { Input } from '@material-ui/core';
import { Popover, Button, Icon } from 'antd';

const { TabPane } = Tabs;

export default function DemoHandle(props) {



    return (
        <>
            <Tabs type="card" tabBarStyle={{ marginBottom: 0 }} defaultActiveKey="1" >
                <TabPane tab="Preset" key="1">
                    <div style={{ width: '60vw', minHeight: 450, backgroundColor: 'white', padding: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }} >
                        <div style={{ width: '15vw', borderColor: 'black', backgroundColor: 'gray' }} >
                            Scroll here
                        </div>
                        <TabTextArea style={{ width: '20vw' }} />
                        <div>
                            <Popover trigger="click" title="KeyPoint" placement="bottom" content={<span>Test</span>} >
                                <Button block type="primary" style={{ marginLeft: 3, marginBottom: 5 }} >Show KeyPoint</Button>
                            </Popover>
                            <TabTextArea style={{ width: '20vw' }} minHeight={400} />
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
                                <Popover trigger="click" title="KeyPoint" placement="bottom" content={<span>Test</span>} >
                                    <Button block type="primary" style={{ marginLeft: 3, marginBottom: 5 }} >Show KeyPoint</Button>
                                </Popover>
                                <TabTextArea style={{ width: '27vw' }} minHeight={350} placeholder="The result will shown here ヽ(´▽｀)ノ" />
                            </div>
                        </div>
                    </div>
                </TabPane>
            </Tabs>
        </>
    )
}