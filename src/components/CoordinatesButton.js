// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

    getCoordinates = (e) => {
        const x = e.clientX
        const y = e.clientY
        const mouseCoordinates = [x, y]
        return mouseCoordinates
    }

    render() {
        return(
            <div id="coordinates-button">
                <button onClick={(e) => this.props.onReceiveCoordinates(this.getCoordinates(e))}>Get Coordinates</button>
            </div>
        )
    }
}

// import React from 'react';

// class CoordinatesButton extends React.Component {
//   handleClick = event => {
//     this.props.onReceiveCoordinates([event.clientX, event.clientY]);
//   };

//   render() {
//     return <button onClick={this.handleClick}>Coords</button>;
//   }
// }

// export default CoordinatesButton;