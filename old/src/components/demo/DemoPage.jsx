import React from 'react'
import '../../css/Demo.css'
import { Tabs, Icon } from 'antd';
import DemoPreset from './DemoPreset';


const { TabPane } = Tabs;

export default function DemoPage(props) {



    return (
        <div style={{ height: '80vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: -20 }} >
            <Tabs defaultActiveKey="1" tabPosition='left' style={{ height: '80vh', display: 'flex', alignItems: 'center' }} tabBarStyle={{ display: 'flex', alignItems: 'center', height: '15%' }}>
                <TabPane
                    tab={<span><Icon type="android" />Preset</span>}
                    key="1"
                >
                    <div style={{ height: '100%', width: '100%' }}>
                        <DemoPreset />
                    </div>
                </TabPane>
                <TabPane
                    tab={<span><Icon type="android" />Live</span>}
                    key="2"
                >
                    Tab 2
                </TabPane>
            </Tabs>
        </div >
    )
}