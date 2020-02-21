import React from 'react'

export default function Navbar(props) {



    return (
        <div style={{ width: "100vw" }} >
            <div style={{ width: '100vw', height: 50, backgroundColor: 'white', textAlign: 'right', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                <div style={{ margin: 20 }} >
                    KeyPoint
                </div>
                <div style={{ margin: 20 }} >
                    Chrome Extension |
                     Login
                </div>
            </div>
        </div>
    )
}