import React from 'react'
import '../style/why.css';

export default function Why(props) {

    return (
        <div className="box" >
            <div className="insideBox">
                <h4>Why KeyPoint?</h4>
            </div>
            <div className="container my-auto" >
                <div className="bigMargin" >
                    <div className="goMargin">
                        <h6 className="textCenter whyPoint" >Summarize</h6>
                        <p className="textCenter textHilang" >Get the point of article that you read</p>
                    </div>
                    <div className="goMargin">
                        <h6 className="textCenter whyPoint" >Remove duplicate</h6>
                        <p className="textCenter textHilang" >No more to duplicate paragraph content</p>
                    </div>
                </div>
                <div className="bigMargin" >
                    <div className="goMargin">
                        <h6 className="textCenter whyPoint" >Chrome extension</h6>
                        <p className="textCenter textHilang" >Use KeyPoint directly on the site</p>
                    </div>
                    <div className="goMargin">
                        <h6 className="textCenter whyPoint" >Reading History</h6>
                        <p className="textCenter textHilang" >Let us remember what you read back then</p>
                    </div>
                </div>
            </div>
        </div>
    )
}