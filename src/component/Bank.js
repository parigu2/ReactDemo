import React, { Component } from 'react';
import {Deposit, Withdraw} from './index';

export default class Bank extends Component {
    constructor() {
        super()
        this.state={
            balance: 500,
            amount: 0,
        }
        this.customAmount = this.customAmount.bind(this);
        this.deposit = this.deposit.bind(this);
        this.withdraw = this.withdraw.bind(this);
    }

    deposit(amount) {
        const balance = this.state.balance + amount;
        this.setState({
            balance,
        })
    }

    withdraw(amount) {
        const balance = this.state.balance - amount;
        if (balance >= 0) {
            this.setState({
                balance,
            })
        } else {
            alert("Check your balance")
        }
    }

    customAmount(evt) {
        this.setState({
            amount: parseInt(evt.target.value)
        })
    }

    render() {
        const amountList = [5, 20, this.state.amount]
        return (
            <div className="card">
                <div className="card-header">
                    <h1>Bank</h1>
                    <div className="form-group" style={{display: "flex", justifyContent: "flex-end"}}>
                        <div className="input-group-prepend">
                            <span className="input-group-text">Amount:</span>
                        </div>
                        <input type="number" className="form-control col-md-2" onChange={(evt)=>this.customAmount(evt)} value={this.state.amount}></input>
                    </div>
                </div>
                <div className="card-body" id="content">
                    <div>
                        <Deposit amount={5} deposit={this.deposit}/>
                        <Deposit amount={20} deposit={this.deposit}/>
                        {
                            this.state.amount ?
                            <Deposit amount={this.state.amount} deposit={this.deposit}/> :
                            <div/>
                        }
                    </div>
                    <div>
                        {
                            amountList.map((amount, idx)=>{
                                if(amount > 0) {
                                    return <Withdraw key={idx} amount={amount} withdraw={this.withdraw}/>
                                } else {
                                    return <div key={idx}/>
                                }
                            })
                        }
                    </div>
                    <h3 style={{marginTop: "20px"}}>Balance: ${this.state.balance}</h3>
                </div>
            </div>
        )
    }
}