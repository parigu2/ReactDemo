import React, {Component} from 'react';

let counter

export default class Counter extends Component {
    constructor() {
        super()
        this.state = {
            count: 0,
        }
    }

    componentWillUpdate() {
        clearTimeout(counter)
    }

    startWorker() {
        counter = setTimeout(()=>{
            this.setState({
                count: this.state.count+1
            })
        },500)
    }

    render() {
        this.startWorker()

        return (
            <div className="justify-content-end" style={{color:"white"}}>
                <h2>Count: {this.state.count}</h2>
            </div>
        )
    }
} 