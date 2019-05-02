import React, {Component} from 'react';
import {Navbar} from './component';
import Routes from './Router';

class App extends Component {
  constructor() {
    super()
    this.state = {
      background: "body-img"
    }
    this.pickBackground = this.pickBackground.bind(this);
  }

  pickBackground(pick) {
    this.setState({
      background: pick
    })
  }

  render() {
    return (
      <div>
        <Navbar pickBackground={this.pickBackground}/>
        <div>
          <div className={this.state.background}></div>
          <div className="container">
            <Routes/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
