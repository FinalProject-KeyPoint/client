import React from 'react'
import '../../css/Demo.css'
import { Tabs, Icon } from 'antd';
import NewDemoPreset from './NewDemoPreset';
import NewDemoLive from './NewDemoLive';

const { TabPane } = Tabs;

export default function NewDemo(props) {


    return (
        <div className="w-75 mx-auto mb-4" style={{ backgroundColor: 'white', padding: 10, }}>
            Demo
            <Tabs defaultActiveKey="1" tabPosition='left' style={{ height: '80vh', display: 'flex', alignItems: 'center', marginLeft: -30 }} tabBarStyle={{ display: 'flex', alignItems: 'center', height: 90 }}>
                <TabPane
                    tab={<span><Icon type="android" />Preset</span>}
                    key="1"
                >
                    <NewDemoPreset />
                </TabPane>
                <TabPane
                    tab={<span><Icon type="android" />Live</span>}
                    key="2"
                >
                    <NewDemoLive />
                </TabPane>
            </Tabs>
        </div >
    )
}