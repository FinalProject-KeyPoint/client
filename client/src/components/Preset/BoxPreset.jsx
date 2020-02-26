import React, { useState } from 'react';
import { Icon, Tooltip, Button } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import '../../style/presetNew.css';

export default function BoxPreset(props) {
    const [copied, setCopied] = useState(false)

    return (
        <div style={{ width: '100%', height: 485, display: 'flex', marginTop: 20, flexDirection: 'column' }} >
            <div style={{ display: 'flex' }} >
                <div className="boxPresetDiv" >
                    <Tooltip title={props.showData.url} >
                        <CopyToClipboard text={props.showData.url}
                            onCopy={
                                () => {
                                    setCopied(true)
                                    setTimeout(() => setCopied(false), 1500)
                                }}>
                            <Button id="btn-copy" style={{ display: 'flex', flexDirection: 'column', marginRight: 15, borderRight: "1px double", padding: 5, marginLeft: -11, height: '140%', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }} >
                                <span style={{ display: 'none' }} className="tooltip" >{props.showData.url}</span>
                                <Icon type="copy" style={{ fontSize: '1.4em' }} />
                                copy url
                                {copied ? <span style={{ color: 'green', zIndex: 2 }}>Copied</span> : null}
                            </Button>
                        </CopyToClipboard>
                    </Tooltip>
                    <span className="showDataTitle" style={{ fontSize: '1.9rem', height: '100%' }} >{props.showData.title} &nbsp;</span>
                </div>
                <Button
                    type="ghost" style={{ height: '100%', width: '10%', borderTopRightRadius: 20, borderBottomRightRadius: 20, backgroundColor: 'lightgreen', color: 'black' }}
                    className="showOriginButton"
                    onClick={() => props.setShowOrigin(!props.showOrigin)}
                >
                    <span className="showShow" >{props.showOrigin ? "Summary" : "Original"}</span>
                </Button>
            </div>
            <div className="textAreaHolder" >
                <textarea
                    className="textClassArea"
                    disabled value={props.showOrigin ? props.showData.real : props.showData.filtered} ></textarea>
                <div className="textDivArea" >
                    {/* <div> */}
                    <h4>Keypoint :</h4>
                    <ul style={{ listStylePosition: 'inside', fontSize: '1rem' }} >
                        {props.showData.keyPoint.map(kalimat => <li> {kalimat} </li>)}
                    </ul>
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}