import React, { useEffect } from 'react';
import TeamDiv from './TeamDiv';
import '../../style/team.css'

import alvina from '../../assets/member/alvina.JPG';
import jap from '../../assets/member/jap.jpg';
import kevin from '../../assets/member/kevin.jpg';
import markus from '../../assets/member/markus.jpg';
import patra from '../../assets/member/patra.jpg';

export default function Meet(props) {

    useEffect(() => {
        //     const scrollHandler = () => {
        //         // console.log(document.documentElement.scrollHeight +' '+ document.documentElement.scrollTop + ', ' + document.documentElement.clientHeight)
        //         console.log(document.documentElement.scrollTop);
        //     }
        //     window.addEventListener('scroll', scrollHandler)
        //     return () => {
        //         window.removeEventListener('scroll', scrollHandler)
        //     }
    }, [])

    return (
        <div style={{ width: '100%' }}>
            <div style={{ objectFit: 'contain', backgroundColor: '#fefefa', padding: 10 }} >
                <h1 style={{ textAlign: 'center', marginTop: 20, textDecoration: 'underline' }} >Team Members</h1>
                <div className="meetDiv" >
                    <TeamDiv
                        foto={jap}
                        nama={"Jap Hendy Wijaya"}
                        job={'as Backend Developer'}
                        quote={"Kalau bisa dipersulit, kenapa harus dipermudah?"}
                        quoteBy={'~Hendy'}
                        className="insideTeamDiv"
                    />
                    <TeamDiv
                        foto={markus}
                        nama={"Markus Antoni Suwignyo"}
                        job={'as Backend Developer'}
                        quote={"be the best"}
                        quoteBy={'~Markus'}
                        className="insideTeamDiv"
                        style={{ alignSelf: 'flex-end', flexDirection: 'row-reverse' }}
                    />
                    <TeamDiv
                        foto={alvina}
                        nama={"Alvina"}
                        job={'as Backend Developer'}
                        quote={"Let the stars shining for us"}
                        quoteBy={'~Tray'}
                        className="insideTeamDiv"
                    />
                    <TeamDiv
                        foto={kevin}
                        nama={"Kevin Wilson"}
                        job={'as Backend Developer'}
                        quote={"If one takes care of the means, the end will take care of itself."}
                        quoteBy={'~Gandhi'}
                        className="insideTeamDiv"
                        style={{ alignSelf: 'flex-end', flexDirection: 'row-reverse' }}
                    />
                    <TeamDiv
                        foto={patra}
                        nama={"Patra Dayanand"}
                        job={'as Frontend Developer'}
                        quote={"Life is just a game, level up!"}
                        quoteBy={'~Tray'}
                        className="insideTeamDiv"
                    />
                </div>
            </div>
        </div>
    )
}