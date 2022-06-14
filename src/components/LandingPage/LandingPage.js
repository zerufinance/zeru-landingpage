import React, { Component } from 'react';
import FirstView from './subcomponents/FirstView';
import SecondView from './subcomponents/SecondView';
import ThirdView from './subcomponents/ThirdView';
import ForthView from './subcomponents/ForthView';
import Fifthview from './subcomponents/fifthview';
import TopNavbar from './TopNavbar';
import Particles from 'react-tsparticles'
import { loadFull } from "tsparticles";
import { Col, Layout, Row } from 'antd';

import { FaDiscord, FaGithub, FaTwitter, FaTelegram } from 'react-icons/fa';

import logo from '../../images/logo.png'
import name from '../../images/name.png'

const { Header, Footer, Sider, Content } = Layout;

const iconcss = {
  height: '30px',
  width: '30px',
  color:'white'
}

const particleOptions = {

  "fullScreen": {
    "enable": true,
    "zIndex": -1
  },
  "particles": {
    "number": {
      "value": 72,
      "density": {
        "enable": false,
        "value_area": 10
      }
    },
    "color": {
      "value": "#A020F0"
    },
    "shape": {
      "type": "star",
      "options": {
        "sides": 3
      }
    },
    "opacity": {
      "value": 0.8,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 1,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 400,
        "size_min": 0.1,
        "sync": false
      }
    },
    "rotate": {
      "value": 0,
      "random": true,
      "direction": "clockwise",
      "animation": {
        "enable": true,
        "speed": 5,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 200,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 1.5,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "events": {
      "onhover": {
        "enable": true,
        "mode": ["repulse"]
      },
      "onclick": {
        "enable": false,
        "mode": "bubble"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 200,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true,
  "background": {
    "color": "#000",
    "image": "",
    "position": "50% 50%",
    "repeat": "no-repeat",
    "size": "cover"
  }

}

export default class LandingPage extends Component {
  constructor() {
    super()
  }

  particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  particlesLoaded = (container) => {
    console.log(container);
  };
  render() {
    return (
      <div className='container' >


        <Particles
          id="tsparticles"
          init={this.particlesInit}
          loaded={this.particlesLoaded}
          options={particleOptions}
        />

        <Layout style={{ background: 'transparent' }}>
          <Header style={{ background: '#191919', position: 'fixed', zIndex: '11', width: '100%' }}>
            <div>
              <TopNavbar />
            </div>

          </Header>
          <Content>
            <FirstView />
            <Fifthview />
            <SecondView />
            <ThirdView />
            <ForthView />
          </Content>
          <Footer style={{ background: '#1c1b22', color: 'white', }} >
            <Row>
              <Col span={12} style={{ display: 'flex', alignItems: 'left', justifyContent: 'left',fontFamily:'Chakra petch' }}>
                <img src={logo} width={50} />
                <img src={name} width={150} />
                {/* <span style={{float:'right'}}>
                Created with ❤️ by Team Zeru
                </span> */}
                
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



          </Footer>
        </Layout>

      </div>
    )
  }
}
