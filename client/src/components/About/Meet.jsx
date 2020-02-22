import React, { useEffect } from 'react';
import TeamDiv from './TeamDiv';

export default function Meet(props) {

    useEffect(() => {
        const scrollHandler = () => {
            // console.log(document.documentElement.scrollHeight +' '+ document.documentElement.scrollTop + ', ' + document.documentElement.clientHeight)
            console.log(document.documentElement.scrollTop);
        }
        window.addEventListener('scroll', scrollHandler)
        return () => {
            window.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    return (
        <div style={{ width: '100%' }}>
            <div style={{ objectFit: 'contain', backgroundColor: '#fefefa', padding: 10 }} >
                <h3 style={{ textAlign: 'center', marginTop: 20 }} >Teams</h3>
                <div style={{ marginTop: 60, display: 'flex', flexDirection: 'column' }} >
                    <TeamDiv />
                    <TeamDiv style={{ alignSelf: 'flex-end' }} />
                    <TeamDiv />
                    <TeamDiv style={{ alignSelf: 'flex-end' }} />
                    <TeamDiv />
                </div>
            </div>
        </div>
    )
}