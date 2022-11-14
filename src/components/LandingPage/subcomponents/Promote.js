import React from 'react'
import { Card } from 'antd';
import '../../../css/second.css'
import DiscordButton from './reusable/DiscordButton';

import { Button } from 'antd';
import { FaDiscord } from 'react-icons/fa'

const center = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingBottom: '4rem',
    background:'#0b0e14'
}


export default function Promote() {
    return (
        <div className='promotediv' style={center}>
                <Card className='promote' style={{ width: '80%', fontSize: "36px", fontFamily: 'Darker Grotesque', fontWeight: 'bolder', borderRadius: '20px',color:'white', lineHeight: '70px' }}>
                    Join the #zeru community to get into whitelist and get early bird access.
                    <p style={{ fontSize: '24px', fontWeight: '500', lineHeight: '35px' }}>The first 1000 users who join the server will get into the whitelist. hurry up reserve your spot in the whitelist!!</p>

                    {/* <Button type="primary" size='large' style={{ border: 'none', borderRadius: '1.75rem', background: 'white', }}>
                        <a href='https://discord.com/invite/yW2BU288Kw' target="_blank" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1rem', fontWeight: '600', color: 'black', fontSize: '20px' }} className="gradientext">
                            Join our community
                            <FaDiscord style={{ height: '30px', width: '30px', paddingLeft: '5px', color: '#000000' }} />
                        </a>
                    </Button> */}
                    <DiscordButton value="Join our community"/>
                </Card>
        </div>
    )
}
