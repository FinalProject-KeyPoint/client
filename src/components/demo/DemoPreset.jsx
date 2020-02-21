// import React, { useState } from 'react'
import React from 'react'
import '../../css/Demo.css'

export default function DemoPreset(props) {
    // const [textArea, setTextArea] = useState('')


    return (
        <div style={{ backgroundColor: 'red', width: '85vw', height: '80vh' }} >
            <div style={{ display: 'flex', flexDirection: 'row', height: '100%', width: '100%', padding: 40 }} >
                <div style={{ flex: 2, backgroundColor: 'blue', height: '100%', padding: 30 }} >
                    <div style={{ backgroundColor: 'purple', height: '100%', width: '100%' }} >

                    </div>
                </div>
                <div style={{ flex: 3, backgroundColor: 'yellow', height: '100%', padding: 30 }} >
                    <div style={{ backgroundColor: 'green', height: '100%', width: '100%' }}>

                    </div>
                </div>
                <div style={{ flex: 3, backgroundColor: 'yellow', height: '100%', padding: 30 }} >
                    <div style={{ backgroundColor: 'green', height: '100%', width: '100%' }}>

                    </div>
                </div>
            </div>
        </div>
    )
}
        // return (
        //     <div className='test' >
        //         <div className="inside">
        //             <div style={{ width: '30%', height: '80%', backgroundColor: 'blue', overflowY: 'auto', textAlign: 'center' }} >
        //                 <div style={{ width: 100, height: 100, marginLeft: 'auto', marginRight: 'auto', marginTop: 10, textAlign: 'center', backgroundColor: 'white' }} > <p>Test</p> </div>
        //                 <div style={{ width: 100, height: 100, marginLeft: 'auto', marginRight: 'auto', marginTop: 10, textAlign: 'center', backgroundColor: 'white' }} > <p>Test</p> </div>
        //                 <div style={{ width: 100, height: 100, marginLeft: 'auto', marginRight: 'auto', marginTop: 10, textAlign: 'center', backgroundColor: 'red' }} > <p>Test</p> </div>
        //                 <div style={{ width: 100, height: 100, marginLeft: 'auto', marginRight: 'auto', marginTop: 10, textAlign: 'center', backgroundColor: 'red' }} > <p>Test</p> </div>
        //                 <div style={{ width: 100, height: 100, marginLeft: 'auto', marginRight: 'auto', marginTop: 10, textAlign: 'center', backgroundColor: 'white' }} > <p>Test</p> </div>
        //                 <div style={{ width: 100, height: 100, marginLeft: 'auto', marginRight: 'auto', marginTop: 10, textAlign: 'center', backgroundColor: 'white' }} > <p>Test</p> </div>
        //                 <div style={{ width: 100, height: 100, marginLeft: 'auto', marginRight: 'auto', marginTop: 10, textAlign: 'center', backgroundColor: 'red' }} > <p>Test</p> </div>
        //                 <div style={{ width: 100, height: 100, marginLeft: 'auto', marginRight: 'auto', marginTop: 10, textAlign: 'center', backgroundColor: 'red' }} > <p>Test</p> </div>
        //                 <div style={{ width: 100, height: 100, marginLeft: 'auto', marginRight: 'auto', marginTop: 10, textAlign: 'center', backgroundColor: 'white' }} > <p>Test</p> </div>
        //                 <div style={{ width: 100, height: 100, marginLeft: 'auto', marginRight: 'auto', marginTop: 10, textAlign: 'center', backgroundColor: 'white' }} > <p>Test</p> </div>
        //                 <div style={{ width: 100, height: 100, marginLeft: 'auto', marginRight: 'auto', marginTop: 10, textAlign: 'center', backgroundColor: 'red' }} > <p>Test</p> </div>
        //                 <div style={{ width: 100, height: 100, marginLeft: 'auto', marginRight: 'auto', marginTop: 10, textAlign: 'center', backgroundColor: 'red' }} > <p>Test</p> </div>
        //             </div>
        //             <div style={{ width: '30%', height: '80%', display: 'flex', justifyContent: 'center', backgroundColor: 'green' }} >
        //                 <textarea style={{ width: '100%', height: '100%', resize: 'none', outline: 'none', padding: 10 }} readOnly />
        //             </div>
        //             <div style={{ width: '30%', height: '80%', display: 'flex', justifyContent: 'center', backgroundColor: 'yellow' }} >
        //                 <p>coba lag</p>
        //             </div>
        //         </div>
        //     </div >
        // )