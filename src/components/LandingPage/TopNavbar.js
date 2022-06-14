import React, { Component } from 'react'
import '../../css/nav.css'
import { Button, Menu, Row } from 'antd';
import logo from '../../images/logo.png'
import name from '../../images/name.png'

const menuitem = {
  background: 'transparent',
}
const anchoritem = {
  color: 'white'
}

export default class TopNavbar extends Component {


  render() {
    return (
      <div>
        <img src={logo} width={30} style={{ float: 'left', marginTop: '15px' }} />
        <img src={name} width={130} style={{ float: 'left', marginTop: '11px', marginLeft: '7px' }} />

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
            <a id='seeproductbtn' style={{ marginTop: '10px', borderRadius: '0.75rem', border: 'none', height: '50px',color:'white',padding:'7px'}}>
              Coming soon
            </a>
          </Menu.Item>

        </Menu>


      </div>
    )
  }
}
