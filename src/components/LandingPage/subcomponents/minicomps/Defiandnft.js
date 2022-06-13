import React from 'react'
import { Row, Col } from 'antd';
import { Card } from 'antd';
import { Bounce, Fade, Slide } from "react-awesome-reveal";
import '../../../../css/styles.css'

export default function Defiandnft() {
    
    return (
        <div >
            <Row className='defiandnftcardrow'>

                <Col span={11} style={{ display: 'flex', justifyContent: 'right', alignItems: 'center', background: 'transparent' }}>
                    <div >
                        <Slide duration="500" triggerOnce='true' fraction={1}>
                            <Card className='bringingcard' style={{ width: 200, height: 200,borderRadius: '0.75rem', boxShadow: '0 6px 12px 0 rgba(3, 19, 84, 0.2)', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'white' }} >
                                <span className='gradientext'>
                                    DEFI
                                </span>
                            </Card>
                        </Slide>
                    </div>
                    
                     
                </Col>

                <Col span={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'transparent' }}>
                    <Bounce triggerOnce='true' fraction={1}>
                        <span id='plus'>+</span>
                    </Bounce>
                </Col>

                <Col span={11} style={{ display: 'flex', justifyContent: 'left', alignItems: 'center', background: 'transparent'}}>
                    <Slide direction="right" duration="500" triggerOnce='true' fraction={1}>
                        <Card className='bringingcard' style={{ width: 200, height: 200, borderRadius: '0.75rem', boxShadow: '0 6px 12px 0 rgba(3, 19, 84, 0.2)', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'white' }}>
                            <span className='gradientext3'>
                                NFT
                            </span>
                        </Card>
                    </Slide>
                        
                       
                </Col>
            </Row>
        </div>
    )
}