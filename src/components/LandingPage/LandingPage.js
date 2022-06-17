import React, { Component } from 'react';
import FirstView from './subcomponents/FirstView';
import SecondView from './subcomponents/SecondView';
import ThirdView from './subcomponents/ThirdView';
import ForthView from './subcomponents/ForthView';
import Fifthview from './subcomponents/fifthview';
import TopNavbar from './TopNavbar';
import { Col, Layout, Row } from 'antd';

import { FaDiscord, FaGithub, FaTwitter, FaTelegram } from 'react-icons/fa';

import logo from '../../images/logo2.png'
import name from '../../images/name.png'
import Promote from './subcomponents/Promote';
import Features from './subcomponents/Features';
import Roadmap from './subcomponents/Roadmap';
import { Fade } from 'react-awesome-reveal';

const { Header, Footer, Content } = Layout;

const iconcss = {
  height: '30px',
  width: '30px',
  color:'white'
}

export default class LandingPage extends Component {
  
  render() {
    return (
      <div className='container' >

        <Layout style={{ background: 'transparent' }}>
          <Header style={{ background: '#0b0e14', position: 'fixed', zIndex: '11', width: '100%' }}>
            <div>
              <TopNavbar />
            </div>

          </Header>
          
          <Content>
            <FirstView />
            <Promote />
            <Features/>
            <Fifthview />
            <SecondView />
            <ThirdView />
            <Roadmap/>
            <ForthView />
          </Content>
          <Footer style={{ background: '#0b0e14', color: 'white', }} >
            <Fade direction='down' duration={500} triggerOnce>
            <Row className='footer'>
              <Col span={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',fontFamily:'Chakra petch' }}>
                <img src={logo} width={30} />
                <img src={name} width={100} />
                <span className='createdwithlove' style={{float:'right'}}>
                Created with ❤️ by Team Zeru
                </span>
                
              </Col>
              <Col span={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem' }}>
                <a href='https://discord.gg/yW2BU288Kw' target="_blank">
                  <FaDiscord style={iconcss} />
                </a>
                <a href='https://github.com/zerufinance' target="_blank">
                  <FaGithub style={iconcss} />
                </a>
                <a href='https://t.me/zerufinance' target="_blank">
                  <FaTelegram style={iconcss} />
                </a>
                <a href='https://twitter.com/zerufinance' target="_blank">
                  <FaTwitter style={iconcss} />
                </a>

              </Col>

            </Row>
            </Fade>

          </Footer>
        </Layout>

      </div>
    )
  }
}
