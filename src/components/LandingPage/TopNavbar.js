import React, { Component } from 'react'
import '../../css/nav.css'
import { Button, Menu, Row } from 'antd';
import logo from '../../images/logo.png'
import name from '../../images/name.png'

import { Drawer } from 'antd';
import { useState } from 'react';

const menuitem = {
  background: 'transparent',
}
const anchoritem = {
  color: 'white'
}

export default function TopNavbar() {

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };



  return (
    <div>
      <img src={logo} width={30} style={{ float: 'left', marginTop: '15px' }} />
      <img src={name} width={130} style={{ float: 'left', marginTop: '11px', marginLeft: '7px' }} />

      {/* <div style={{float:'right',position:'fixed'}}>
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
        <Drawer title="Basic Drawer" placement="right" onClose={onClose} visible={visible}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </div> */}

      <div className='mobileHidden'>

        <Menu mode="horizontal" style={{ float: 'right', backgroundColor: 'transparent', color: 'white', borderBottom: 'none' }}>
          <Menu.Item key="mail" style={menuitem}>
            <a href='#fifthview' style={anchoritem}>
              Zero Collateral Loans
            </a>
          </Menu.Item>
          <Menu.Item key="1" style={menuitem}>
            <a href='#secondview' style={anchoritem}>
              DFI + NFT
            </a>

          </Menu.Item>
          <Menu.Item key="2" style={menuitem}>
            <a href='#thirdview' style={anchoritem}>
              Transferable NFT
            </a>

          </Menu.Item>
          <Menu.Item key="3" style={menuitem}>
            <a href='#forthview' style={anchoritem}>
              Community
            </a>
          </Menu.Item>
          <Menu.Item key="4" style={menuitem}>
            <a id='seeproductbtn' style={{ marginTop: '10px', borderRadius: '0.75rem', border: 'none', height: '50px', color: 'white', padding: '7px' }}>
              Coming soon
            </a>
          </Menu.Item>

        </Menu>

      </div>

      



    </div>
  )
}
