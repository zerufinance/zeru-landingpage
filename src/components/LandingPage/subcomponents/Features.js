import React, { Component } from 'react'
import { Card } from 'antd';
import { Row } from 'antd'
import Feature from './minicomps/Feature';

const cardstyle = {
    width: 300,
    height: 300,
}

export default class Features extends Component {
    render() {
        return (
            <div className='featuresview' style={{fontSize:'2rem',minHeight:'100vh',color:'white',fontWeight:'600'}}>
                Features
                <br/>
                <br/>
                <Row style={{ display: 'flex', justifyContent: 'space-around',flexDirection:'row',textAlign:'left' }}>
                    <Feature title="Zero Collateral Loans" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pretium orci ut libero scelerisque venenatis. Sed egestas eros ac tellus eleifend convallis. Nam luctus vulputate velit, vitae faucibus urna lobortis eu."/>
                    <Feature title="Credit Card NFT's" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pretium orci ut libero scelerisque venenatis. Sed egestas eros ac tellus eleifend convallis. Nam luctus vulputate velit, vitae faucibus urna lobortis eu."/>
                    <Feature title="To Be Revealed" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pretium orci ut libero scelerisque venenatis. Sed egestas eros ac tellus eleifend convallis. Nam luctus vulputate velit, vitae faucibus urna lobortis eu."/>
                </Row>
            </div>
        )
    }
}
