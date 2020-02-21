import React from 'react';
import '../../style/navbar.css'


export default function Navbar(props) {


    return (
        <div className="navbar" >
            <div style={{ marginLeft: 25 }} >
                <p>KeyPoint</p>
            </div>
            <div className="right-bar" >
                <p>Extension</p>
                <p>Login</p>
            </div>
        </div>
    )
}