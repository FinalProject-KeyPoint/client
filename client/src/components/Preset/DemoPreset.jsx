import React from 'react';
import '../../style/demoPreset.css';
import TopPreset from './TopPreset';

export default function DemoPreset(props) {


    return (
        <div className="DemoPreset" >
            <div style={{ padding: 25 }} >
                <div style={{ width: '100%', height: 333, padding: 15 }} >
                    <TopPreset />
                </div>
            </div>
        </div>
    )
}