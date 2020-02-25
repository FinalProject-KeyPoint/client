import React, { useState } from 'react';
import { Icon, Tooltip, Button } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function BoxPreset(props) {
    const [copied, setCopied] = useState(false)
    const [showOrigin, setShowOrigin] = useState(false)

    return (
        <div style={{ width: '100%', height: 485, display: 'flex', marginTop: 20, flexDirection: 'column' }} >
            <div style={{ display: 'flex' }} >
                <div style={{ userSelect: 'none', width: '90%', height: 80, backgroundColor: 'white', fontSize: '1.2rem', padding: 10, display: 'flex', alignItems: 'center', overflowY: 'hidden', borderTopLeftRadius: 20 }} >
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
                    <span style={{ fontSize: '1.9rem' }} >{props.showData.title}</span>
                </div>
                <Button
                    type="ghost" icon="solution" style={{ height: '100%', width: '10%', borderTopRightRadius: 20, borderBottomRightRadius: 20, backgroundColor: 'lightgreen', color: 'black' }}
                    className="showOriginButton"
                    onClick={() => setShowOrigin(!showOrigin)}
                >
                    {showOrigin ? "Show Summary" : "Show Original"}
                </Button>
            </div>
            <textarea
                style={{ height: 400, width: '100%', backgroundColor: 'white', marginTop: 20, padding: 20, overflow: 'auto', borderRadius: 15, resize: 'none', userSelect: 'none', fontFamily: 'Hind Siliguri', fontSize: '1.1rem' }}
                disabled value={showOrigin ? props.showData.real : props.showData.filtered} ></textarea>
        </div>
    )
}