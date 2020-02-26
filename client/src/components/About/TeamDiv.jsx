import React from 'react';
import { Image } from 'react-bootstrap'
import '../../style/team.css'

export default function TeamDiv(props) {



    return (
        <div
            style={{ ...props.style }}
            className="teamDiv insideTeamDiv"
        >
            <div className='teamSecondDiv' >
                <Image
                    src={props.foto}
                    width={200}
                    height={200}
                    thumbnail
                    roundedCircle
                />
            </div>
            <div className='teamSecondDiv' >
                <h4>{props.nama}</h4>
                <h6>{props.job}</h6>
                <q>{props.quote}</q>
                <i> {props.quoteBy}</i>
            </div>
        </div>
    )
}