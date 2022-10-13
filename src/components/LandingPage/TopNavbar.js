import React, { Component } from 'react'
import '../../css/nav.css'
import logo from '../../images/logo2.png'
import name from '../../images/name.png'


export default function TopNavbar() {


  return (
    <div style={{paddingTop: '15px'}}>
<a class="logo" href="/">
        <img src={logo} width={30} style={{ float: 'left', marginTop: '15px' }} alt='logo'/>
        <img src={name} width={130} style={{ float: 'left', marginTop: '11px', marginLeft: '7px' }} alt='name'/></a>
      <div className='mobileHidden'>
      
      <nav>
        <ul class="nav__links">
          <li><a href="#features">Features</a></li>
          <li><a href="#zerocollateral">Zero Collateral</a></li>
          <li><a href="#defi+nft">DeFi + NFT</a></li>
          <li><a href="#transferablenft">Transferable NFT</a></li>
          <li><a href="#roadmap">Roadmap</a></li>
          <li><a href="#community">Community</a></li>
          <li><a class="cta" href="#">Coming soon</a></li>
        </ul>
      </nav>
      </div>

     
      
      {/* <p class="menu cta">Menu</p> */}

      {/* <a href='#firstview'>
        <img src={logo} width={30} style={{ float: 'left', marginTop: '15px' }} />
        <img src={name} width={130} style={{ float: 'left', marginTop: '11px', marginLeft: '7px' }} />
      </a>


      <div className=''>

        <ul style={{ display: 'flex', justifyContent: 'space-around' }}>
          <a href='#featuresview' style={anchoritem}>
            Features
          </a>
          <a href='#fifthview' style={anchoritem}>
            Zero Collateral Loans
          </a>
          <a href='#secondview' style={anchoritem}>
            DFI + NFT
          </a>
          <a href='#thirdview' style={anchoritem}>
            Transferable NFT
          </a>
          <a href='#roadmapview' style={anchoritem}>
            Roadmap
          </a>
          <a href='#forthview' style={anchoritem}>
            Community
          </a>
        </ul> 
        </div>
        */}


    </div>
  )
}


