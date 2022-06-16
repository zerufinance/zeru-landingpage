import React, { Component } from 'react'
import { Card } from 'antd';
import { Row } from 'antd'
import Feature from './minicomps/Feature';
import { Fade } from 'react-awesome-reveal';

const cardstyle = {
    width: 300,
    height: 300,
}

export default class Features extends Component {
    render() {
        return (
            <div className='featuresview' style={{}}>
                Features
                <div className='underline'>
                </div>
                <br />
                <Row style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'row', textAlign: 'left', gap: '2rem' }}>
                    <Fade direction='left' duration={500} triggerOnce>
                        <Feature title="Zero Collateral Loans" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pretium orci ut libero scelerisque venenatis. Sed egestas eros ac tellus eleifend convallis. Nam luctus vulputate velit, vitae faucibus urna lobortis eu." />
                    </Fade>
                    <Fade direction='up' duration={500} triggerOnce>
                        <Feature title="Credit Card NFT's" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pretium orci ut libero scelerisque venenatis. Sed egestas eros ac tellus eleifend convallis. Nam luctus vulputate velit, vitae faucibus urna lobortis eu." />
                    </Fade>
                    <Fade direction='right' duration={500} triggerOnce>
                        <Feature title="To Be Revealed" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pretium orci ut libero scelerisque venenatis. Sed egestas eros ac tellus eleifend convallis. Nam luctus vulputate velit, vitae faucibus urna lobortis eu." />
                    </Fade>
                </Row>
            </div>
        )
    }
}
