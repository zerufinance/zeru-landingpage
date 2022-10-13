import React, { Component } from 'react'
import { Row, Col } from 'antd';
import Defiandnft from './minicomps/Defiandnft';
import { Fade } from 'react-awesome-reveal';

export default class SecondView extends Component {
  render() {
    return (
      <div className='secondview' id="defi+nft" >

        <Row >

          <Col span={24} className='secondviewitems' style={{ color: 'white', background: 'transparent' }}>
            <Fade duration={500} direction='up' triggerOnce='true'>
              <div style={{fontSize: '64px', fontWeight: 'bold'}}>
                Integrating DEFI with NFT
                <p style={{color: '#E5B8FF'}}>Bringing Decentralized Finance and NFT together</p>
              </div>
            </Fade>
            
            
            <Defiandnft />
          </Col>


        </Row>
      </div>
    )
  }
}
