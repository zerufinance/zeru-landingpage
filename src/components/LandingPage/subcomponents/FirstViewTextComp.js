import React, { Component } from "react";
import "../../../css/styles.css";
import "../../../css/span.css";
import "../../../css/texts.css"
import DiscordButton from "./reusable/DiscordButton";

export default class FirstViewTextComp extends Component {
  render() {
    return (
      <div id="firstviewtextcomp">
        <span className="spanfirstview desctext" style={ {includeFontPadding: false, lineHeight: '90px'}}>
          <p className="heading2">Credit Industry of Defi World with</p>
          <p className="heading1" >
            Zero-Collateral Loans
          </p>
        <p className="normal-text">
          Bringing Credit Industry into Decentralized Finance World <br />
          Enabling Zero Collateral Loans for everyone.
        </p>
        
        </span>
        <DiscordButton value="Join our community"/>
    
      </div>
    );
  }
}

