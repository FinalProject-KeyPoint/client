import React, { useState } from 'react';
import { Menu, Dropdown, Icon } from 'antd';


export default function DropDownPreset(props) {
    const [visible, setVisible] = useState(false)

    const handleMenuClick = e => {
        setVisible(false);
        props.setActive(e.key)
    };

    const handleVisibleChange = flag => {
        setVisible(flag);
    };

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="Cnn">Cnn.com</Menu.Item>
            <Menu.Item key="Detik">Detik.com</Menu.Item>
            <Menu.Item key="Kompas">Kompas.com</Menu.Item>
            <Menu.Item key="Liputan">Liputan6.com</Menu.Item>
            <Menu.Item key="Okezone">Okezone.com</Menu.Item>
            <Menu.Item key="Tempo">Tempo.co</Menu.Item>
            <Menu.Item key="Tribun">Tribun.com</Menu.Item>
        </Menu>
    );

    return (
        <Dropdown
            trigger={['click']}
            overlay={menu}
            onVisibleChange={handleVisibleChange}
            visible={visible}
        >
            <div style={{ width: '90%', backgroundColor: 'white', height: 30, whiteSpace: 'nowrap', overflowX: 'auto' }} >
                <span
                    className="ant-dropdown-link"
                    onClick={e => e.preventDefault()}
                    style={{ fontSize: '1.3em', color: 'royalblue', textAlign: 'center' }}
                >
                    <Icon type="down" /> {props.showData.title} <Icon type="down" />
                </span>
            </div>
        </Dropdown>
    )
}