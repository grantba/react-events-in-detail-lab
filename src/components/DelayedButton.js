// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {

    setDelay = event => {
        event.persist()
        window.setTimeout(() => {
          this.props.onDelayedClick(event)
        }, this.props.delay)
      }
    
      render() {
        return( 
            <button onClick={this.setDelay}>Delay</button>
        )
    }

}

  
// import React from 'react';

// class DelayedButton extends React.Component {
//   handleClick = event => {
//     event.persist();
//     window.setTimeout(() => {
//       this.props.onDelayedClick(event);
//     }, this.props.delay);
//   };

//   render() {
//     return <button onClick={this.handleClick}>Delayed</button>;
//   }
// }

// export default DelayedButton;