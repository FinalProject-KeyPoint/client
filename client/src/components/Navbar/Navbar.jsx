import React from 'react';
import { useSelector, useDispatch } from 'react-redux' 
import '../../style/navbar.css'
import { Link } from 'react-router-dom'
import { Popover, Button, Icon } from 'antd';
import TelegramIcon from '@material-ui/icons/Telegram';
import KeyPoint from '../../assets/keypoint_tpr.png'
import LoginForm from '../Forms/LoginForm'
import { LOGOUT } from '../../store/actionTypes'

export default function Navbar(props) {

    const isLoggedIn = useSelector(state => state.users.isLoggedIn)
    const dispatch = useDispatch()
    // const scroller = () => {
    //     window.scrollTo({
    //         top: 420,
    //         behavior: 'smooth'
    //     })
    //     // window.scroll(0, 600)
    // }

    const logout = () => {
        dispatch({
            type: LOGOUT
        })
    }

    const toTelegram = () => {
        window.open('http://t.me/keypoint_hacktiv_bot', '_blank')
    }

    const toFirefox = () => {
        window.open('https://addons.mozilla.org/en-US/firefox/', '_blank')
    }

    return (
        <div className="navbar" >
            <div className="logoNav" >
                {/* <Button type='link' className="btnNav" onClick={scroller} > KeyPoint </Button> */}
                <Link to={'/'}>
                    <img src={KeyPoint} onClick={props.handleClick} alt="" />
                </Link>
            </div>
            <div className="right-bar" >
                <Link to={'/dashboard'}>
                    <Button type='link' className="btnNav" > Dashboard </Button>
                </Link>
                <Popover className="popNav" trigger="click" placement="bottomRight" content={
                    <div className="navPopContent" style={{ width: 300, display: 'flex', justifyContent: 'space-between' }} >
                        <span onClick={toFirefox}><i className="fa fa-firefox"></i> Firefox</span> |
                        <span onClick={toTelegram}><TelegramIcon>telegram</TelegramIcon>Telegram</span>
                    </div>
                }>
                    <Button type='link' className="btnNav" > Find Us </Button>
                </Popover>
                
                {
                    !isLoggedIn
                        ?   <Popover className="popNav" trigger="click" placement="bottomRight" content={
                                <div className="navPopContent" style={{ width: 300, display: 'flex', justifyContent: 'space-between' }} >
                                    <LoginForm />
                                </div>
                            }>
                                <Button type='link' className="btnNav" > Sign In </Button>
                            </Popover>
                        :   <Button type='link' className="btnNav" onClick={logout}> Sign Out </Button>
                }
            </div>
        </div>
    )
}