import React from 'react'
import { Tabs } from 'antd';
import PresentDemo from './Tab1';
import LiveDemo from './Tab2';


const { TabPane } = Tabs;

export default function DemoHandle(props) {



    return (
        <>
            <Tabs type="card" tabBarStyle={{ marginBottom: 0 }} defaultActiveKey="1" animated={true} >
                <TabPane tab="Preset" key="1">
                    <PresentDemo />
                </TabPane>
                <TabPane tab="Live Demo" key="2">
                    <LiveDemo />
                </TabPane>
            </Tabs>
        </>
    )
}

