import React, { Component } from 'react';

export default class Withdraw extends Component {
    render() {
        const {amount, withdraw} = this.props;
        return (
            <button className="btn btn-danger" onClick={()=>withdraw(amount)}>WITHDRAW ${amount}</button>
        )
    }
}