import React, { Component } from "react";
import "../../../css/styles.css";
import "../../../css/span.css";
import "../../../css/texts.css"

export default class FirstViewTextComp extends Component {
  render() {
    return (
      <div id="firstviewtextcomp">
        <span className="spanfirstview desctext" style={ {includeFontPadding: false, lineHeight: '90px'}}>
          Credit Industry of Defi World with
          <span className="gradientext spanfirstview desc2text" style={{lineHeight: '90px'}}>
            Zero-Collateral Loans
          </span>
        <p style={{lineHeight: '20px', color: "#E5B8FF"}}>
          Bringing Credit Industry into Decentralized Finance World <br />
          Enabling Zero Collateral Loans for everyone.
        </p>
        </span>

    
      </div>
    );
  }
}

