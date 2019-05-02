import React, { Component } from 'react';

export default class Deposit extends Component {
    render() {
        const {amount, deposit} = this.props;
        
        return (
            <button className="btn btn-info" onClick={()=>deposit(amount)}>DEPOSIT ${amount}</button>
        )
    }
}