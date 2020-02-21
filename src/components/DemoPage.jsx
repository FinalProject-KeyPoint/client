import React, { useState } from 'react'
import '../css/Demo.css'

export default function DemoPage(props) {
    const [textArea, setTextArea] = useState('')

    return (
        <div className='test' >
            <div className="inside">
                <div style={{ width: '30%', height: '80%', backgroundColor: 'blue', overflowY: 'auto', textAlign: 'center' }} >
                    <div style={{ width: 100, height: 100, marginLeft: 'auto', marginRight: 'auto', marginTop: 10, textAlign: 'center', backgroundColor: 'white' }} > <p>Test</p> </div>
                    <div style={{ width: 100, height: 100, marginLeft: 'auto', marginRight: 'auto', marginTop: 10, textAlign: 'center', backgroundColor: 'white' }} > <p>Test</p> </div>
                    <div style={{ width: 100, height: 100, marginLeft: 'auto', marginRight: 'auto', marginTop: 10, textAlign: 'center', backgroundColor: 'red' }} > <p>Test</p> </div>
                    <div style={{ width: 100, height: 100, marginLeft: 'auto', marginRight: 'auto', marginTop: 10, textAlign: 'center', backgroundColor: 'red' }} > <p>Test</p> </div>
                    <div style={{ width: 100, height: 100, marginLeft: 'auto', marginRight: 'auto', marginTop: 10, textAlign: 'center', backgroundColor: 'white' }} > <p>Test</p> </div>
                    <div style={{ width: 100, height: 100, marginLeft: 'auto', marginRight: 'auto', marginTop: 10, textAlign: 'center', backgroundColor: 'white' }} > <p>Test</p> </div>
                    <div style={{ width: 100, height: 100, marginLeft: 'auto', marginRight: 'auto', marginTop: 10, textAlign: 'center', backgroundColor: 'red' }} > <p>Test</p> </div>
                    <div style={{ width: 100, height: 100, marginLeft: 'auto', marginRight: 'auto', marginTop: 10, textAlign: 'center', backgroundColor: 'red' }} > <p>Test</p> </div>
                    <div style={{ width: 100, height: 100, marginLeft: 'auto', marginRight: 'auto', marginTop: 10, textAlign: 'center', backgroundColor: 'white' }} > <p>Test</p> </div>
                    <div style={{ width: 100, height: 100, marginLeft: 'auto', marginRight: 'auto', marginTop: 10, textAlign: 'center', backgroundColor: 'white' }} > <p>Test</p> </div>
                    <div style={{ width: 100, height: 100, marginLeft: 'auto', marginRight: 'auto', marginTop: 10, textAlign: 'center', backgroundColor: 'red' }} > <p>Test</p> </div>
                    <div style={{ width: 100, height: 100, marginLeft: 'auto', marginRight: 'auto', marginTop: 10, textAlign: 'center', backgroundColor: 'red' }} > <p>Test</p> </div>
                </div>
                <div style={{ width: '30%', height: '80%', display: 'flex', justifyContent: 'center', backgroundColor: 'green' }} >
                    <textarea style={{ width: '100%', height: '97%', resize: 'none', outline: 'none', padding: 10 }} />
                </div>
                <div style={{ width: '30%', height: '80%', display: 'flex', justifyContent: 'center', backgroundColor: 'yellow' }} >
                    <p>coba lag</p>
                </div>
            </div>
        </div >
    )
}