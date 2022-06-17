import React, { Component } from 'react'
import credit from '../../../images/credit1.png'
import freeupcollateral from '../../../images/freeupcollateral1.png'
import community from '../../../images/community1.png'
import { Fade } from 'react-awesome-reveal';
import '../../../css/second.css'


export default class fifthview extends Component {
    render() {
        return (
            <div className='fifthview' id='zerocollateral'>
                

                <Fade direction='up' duration={500} triggerOnce='true' fraction={0.3}>
                    <div className='heading'>
                        Zero Collateral Loans
                        <div className='gradientlinebottom'>
                        </div>
                        <p>Enabling Zero collateral loans to everyone in the world</p>
                    </div>

                </Fade>

                <div className='secondcenter'>
                    <Fade direction='left' duration={500} triggerOnce='true' fraction={0.5}>
                        <div className='d1'>
                            <div className='gradientline'>
                            </div>
                            Get Line of Credit
                            <p>
                            Get Credit instantly from zeru, We will never take any personal information from the user and never ask for KYC.
                            </p>
                        </div>
                    </Fade>
                    <Fade direction='right' duration={500} triggerOnce='true' fraction={0.5}>
                        <div className='d2'>
                            <img src={credit} alt="get credit" width={200} />
                        </div>
                    </Fade>

                </div>

                <div className='secondcenter'>
                    <Fade direction='left' duration={500} triggerOnce='true' fraction={0.5}>
                        <div className='d2'>
                            <img src={freeupcollateral} alt="get credit" width={200} />
                        </div>
                    </Fade>
                    <Fade direction='right' duration={500} triggerOnce='true' fraction={0.5}>
                        <div className='d1'>
                            <div className='gradientline'>
                            </div>
                            Free up Your Collateral
                            <p>
                            By taking undercollateralized loans you can free up your collateral that used to get locked up in the protocol. By freeing up your collateral you optimize your total yield.
                            </p>
                        </div>
                    </Fade>

                </div>

                <div className='secondcenter'>
                    <Fade direction='left' duration={500} triggerOnce='true' fraction={0.5}>
                        <div className='d1'>
                            <div className='gradientline'>
                            </div>
                            Community First
                            <p>
                            Zeru will be a community-first protocol by making the community our top priority. Thus, making our users the true owners of Zeru.
                            </p>
                        </div>
                    </Fade>
                    <Fade direction='right' duration={500} triggerOnce='true' fraction={0.5}>
                        <div className='d2'>
                            <div className='id1'>
                                <img src={community} alt="get credit" width={200} />
                            </div>
                        </div>
                    </Fade>

                </div>

            </div>
        )
    }
}
