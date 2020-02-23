import React from 'react';
import '../../style/navbar.css'
import { Popover, Button, Icon } from 'antd';
import TelegramIcon from '@material-ui/icons/Telegram';
import KeyPoint from '../../assets/keypoint_tpr.png'

export default function Navbar(props) {

    const scroller = () => {
        window.scrollTo({
            top: 420,
            behavior: 'smooth'
        })
        // window.scroll(0, 600)
    }



    return (
        <div className="navbar" >
            <div style={{ marginLeft: 25, width: 150, height: 40 }} >
                {/* <Button type='link' className="btnNav" onClick={scroller} > KeyPoint </Button> */}
                <img src={KeyPoint} onClick={scroller} alt="" style={{objectFit: 'center', width: '100%', height: '100%'}} />
            </div>
            <div className="right-bar" >
                <Popover className="popNav" trigger="click" placement="bottomRight" content={
                    <div className="navPopContent" style={{ width: 300, display: 'flex', justifyContent: 'space-between' }} >
                        <span><Icon type="chrome" /> &nbsp;Chrome</span> | 
                        <span><i class="fa fa-firefox"></i> Firefox</span> | 
                        <span><TelegramIcon>telegram</TelegramIcon>Telegram</span>
                    </div>
                }>
                    <Button type='link' className="btnNav" > Find Us </Button>
                </Popover>
                <Button type='link' className="btnNav" > Login </Button>
            </div>
        </div>
    )
}