import React, { Component } from 'react'
import { Row } from 'antd';
import { Card } from 'antd';
import { Fade } from 'react-awesome-reveal';

import '../../../css/styles.css'

const cardstyle = {
  maxWidth: 150,
  minHeight: 150,
}

export default class ThirdView extends Component {
  render() {
    return (
      <div id='transferablenft' className='commonview' >
        <Fade direction='left' duration={500} triggerOnce='true' fraction={1}>
          <div className='textmargin'>
            Transferable <span className='gradientext4'>NFT's</span>
            <p style={{fontSize:'1.2rem',fontWeight:'500'}}>Transfer your credit to anyone as NFT.</p>
          </div>
        </Fade>
        
        <Row style={{ display: 'flex', justifyContent: 'space-around', }}>
          <Fade direction='left' duration={500} triggerOnce='true' fraction={1}>
            <Card className='cardintransfer' style={cardstyle}>
              
                <h3 style={{ color: 'white', fontWeight: '600' }}>Instant Loans</h3>
                <p>
                As the core algorithm runs on smart contracts you never have to wait to get a loan. It's Instant, Period.
                </p>
              
              
            </Card>
          </Fade>
          <Fade direction='up' duration={500} triggerOnce='true' fraction={1}>
            <Card className='cardintransfer' style={cardstyle}>
              <div>
                <h3 style={{ color: 'white', fontWeight: '600' }}>Smart Card NFT</h3>
                <p>
                Convert the credit you earned by minting an NFT and use it as a Smart card to get Credit from Zeru and other protocols.
                </p>
              </div>
              
            </Card>
          </Fade>
          <Fade direction='right' duration={500} triggerOnce='true' fraction={1}>
            <Card className='cardintransfer' style={cardstyle}>
              <div>
                <h3 style={{ color: 'white', fontWeight: '600' }}>Credit Delegation</h3>
                <p>
                Delegate your credit to anyone as NFT. Delegate borrowing power (i.e. your credit) to other users.                </p>
              </div>
              
            </Card>
          </Fade>
          
        </Row>

      </div>
    )
  }
}
