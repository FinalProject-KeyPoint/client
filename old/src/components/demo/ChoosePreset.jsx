import React from 'react';


export default function ChoosePreset(props) {

    const array = [1, 2, 3, 4, 6, 7, 6, 3, 2, 5, 9]

    return (
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column', overflowY: 'auto', alignItems: 'center' }} >
            {
                array.map(arr => <div style={{ width: 50, height: 50, margin: 20 }} >{arr}</div>)
            }
        </div>
    )
}