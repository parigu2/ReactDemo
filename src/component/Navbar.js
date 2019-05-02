import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Counter, Background} from './index';

export default class Navbar extends Component {
    render() {
        const {pickBackground} = this.props

        return (
            <div className="navbar sticky-top navbar-dark bg-dark">
                <div className="justify-content-start">
                    <Link to="/" className="navbar-brand">Home</Link>
                    <Link to="/bank" className="navbar-brand">Bank</Link>
                </div>
                <div className="justify-content-center" style={{color: "white"}}>
                    <h3>
                        <Background pickBackground={pickBackground} background={"body-img"} name={"pic1"}/>
                        <Background pickBackground={pickBackground} background={"body-img2"} name={"pic2"}/>
                        <Background pickBackground={pickBackground} background={"body-img3"} name={"pic3"}/>
                    </h3>
                </div>
                <Counter/>
            </div>            
        )
    }
}