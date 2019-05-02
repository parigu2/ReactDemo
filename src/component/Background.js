import React, {Component} from 'react';

export default class Background extends Component {
    render() {
        const {pickBackground, background, name} = this.props

        return (
            <span onClick={()=>pickBackground(background)}>{name} </span>
        )
    }
} 