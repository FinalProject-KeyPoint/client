import React from 'react'
import TabTextArea from '../TabTextArea'
import PresetTemplate from './PresetTemplate';
import KeyButton from './keybutton';
import '../../style/Tab1.css'



export default function Tab1(props) {


    return (
        <div className="tabOne" >
            <PresetTemplate />
            <TabTextArea
                style={{ width: '20vw', height: 500 }}
                minHeight={130}
                placeholder="choose one source ヘ(◕。◕ヘ)"
            />
            <div className="tabTwoHandle moveup" >
                <KeyButton keypoint={cobaPopUp} />
                <TabTextArea style={{ width: '20vw', height: 463 }} minHeight={140} placeholder="The result will shown here ヽ(´▽｀)ノ" />
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