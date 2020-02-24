import React, { useEffect } from 'react';
import TeamDiv from './TeamDiv';

import alvina from '../../assets/member/alvina.JPG';
import jap from '../../assets/member/jap.jpg';
import kevin from '../../assets/member/kevin.jpg';
import markus from '../../assets/member/markus.jpg';
import patra from '../../assets/member/patra.jpg';

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
                    <TeamDiv
                        foto={jap}
                        nama={"Jap Hendy Wijaya"}
                        job={'as Backend Developer'}
                        quote={"Kalau bisa dipersulit, kenapa harus dipermudah?"}
                    />
                    <TeamDiv
                        foto={markus} style={{ alignSelf: 'flex-end', flexDirection: 'row-reverse' }}
                        nama={"Markus Antoni Suwignyo"}
                        job={'as Backend Developer'}
                        quote={"be the best"}
                    />
                    <TeamDiv
                        foto={alvina}
                        nama={"Alvina"}
                        job={'as Backend Developer'}
                        quote={"be the best"}
                    />
                    <TeamDiv
                        foto={kevin} style={{ alignSelf: 'flex-end', flexDirection: 'row-reverse' }}
                        nama={"Kevin Wilson"}
                        job={'as Backend Developer'}
                        quote={"be the best"}
                    />
                    <TeamDiv
                        foto={patra}
                        nama={"Patra Dayanand"}
                        job={'as Frontend Developer'}
                        quote={"Live is just a game"}
                    />
                </div>
            </div>
        </div>
    )
}