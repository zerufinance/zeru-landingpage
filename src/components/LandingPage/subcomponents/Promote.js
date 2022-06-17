import React from 'react'
import { Card } from 'antd';
import DiscordButton from './reusable/DiscordButton';
import '../../../css/second.css'

import { Button, Radio } from 'antd';
import { FaDiscord } from 'react-icons/fa'
import { Fade, Flip,Roll,Shake } from 'react-awesome-reveal';

const center = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingBottom: '4rem'
}


export default function Promote() {
    return (
        <div className='promotediv' style={center}>
                <Card className='promote' style={{ width: '80%', fontSize: "1.5rem", fontFamily: 'Chakra petch', fontWeight: '600', borderRadius: '1rem',color:'white' }}>
                    Join the #zeru community to get into whitelist and get early bird access.
                    <p style={{ fontSize: '1rem', fontWeight: '500' }}>The first 1000 users who join the server will get into the whitelist. hurry up reserve your spot in the whitelist!!</p>

                    <Button type="primary" size='large' style={{ border: 'none', borderRadius: '1.75rem', background: 'white', }}>
                        <a href='https://discord.com/invite/yW2BU288Kw' target="_blank" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1rem', fontWeight: '500', color: 'black' }}>
                            Join Now
                            <FaDiscord style={{ height: '30px', width: '30px', paddingLeft: '5px' }} />
                        </a>
                    </Button>
                </Card>
        </div>
    )
}
