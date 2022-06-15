import React from 'react'
import { Card } from 'antd';
import DiscordButton from './reusable/DiscordButton';

const center={
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column',
    marginBottom:'4rem'
}

export default function Promote() {
    return (
        <div style={center}>
            <Card style={{ width: '80%',fontSize:"1.5rem",fontFamily:'Chakra petch',fontWeight:'600',borderRadius:'1rem'}}>
                Join the #zeru community to get into whitelist and avail early access to benifits.
                <p style={{fontSize:'1rem',fontWeight:'500'}}>The first 500 users who join the server will get into the whitelist. hurry up reserve your spot in the whitelist!!</p>

                <DiscordButton value="Join now!!"/>
            </Card>
        </div>
    )
}
