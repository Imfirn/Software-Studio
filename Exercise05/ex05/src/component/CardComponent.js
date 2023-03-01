import React, { Component } from "react";
import "./Card.css";

class VoteAmount extends Component {
  constructor(props) {
    super(props);
    
    
  }

  handleClick = (vbtn) => {
    
    this.props.parentCallbcak(vbtn);
    
  };

  render() {
  

    function checkStatusADD (c){
      if (c>=10){
        alert("You can't vote anymore");
      }
    }
  
    function checkStatusRE (c){
      if (c<=0){
        alert("You can't unvote anymore");
      }
    }
 
    return (
      <div className="vote">
        <div className="col">
          <button className="btn" onClick={()=>{this.handleClick("Vote");checkStatusADD(this.props.amount) }}>Click to Vote</button>
          <div className="amount">{this.props.amount==0?"MIN":this.props.amount==10?"MAX":this.props.amount}</div>
          <button className="btn" onClick={()=>{this.handleClick("Unvote");checkStatusRE(this.props.amount)}}>Click to Unvote</button>
        </div>
      </div>
    );
  }
}

export default class CardComponent extends Component {
  state = {
    amount: 0,
  };

  handleCallback = (btn) => {
    const { amount } = this.state;
    let newAmount;
   
    if (btn === "Vote" && amount < 10) {
      newAmount = amount + 1;
    } else if (btn === "Unvote" && amount > 0) {
      newAmount = amount - 1;
    } else {
      return;
    }

    this.setState({ amount: newAmount });
  };



  render() {
    const { amount } = this.state;
    return (
      <div className="container">
        <div className="col">
          <div className="foodInfo">
            <h2>{this.props.fType}</h2>
            <h3>{this.props.fname}</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              pellentesque at mi quis placerat. Curabitur porta, ante nec
              sollicitudin porta, lectus lorem malesuada nisi, aliquet varius
              urna ipsum et lectus. Quisque tempor odio tortor, ut egestas nisl
              dapibus ut.
            </p>
          </div>
          <div>
            <img
              className="divImg"
              src={this.props.fImg}
            />
          </div>
        </div>
        <VoteAmount amount={amount} parentCallbcak={this.handleCallback} />
      </div>
    );
  }
}
