import React, { Component } from "react";
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false,
      ballPosition: 0, // Track ball position (in pixels)
    };

    this.renderChoice = this.renderBallOrButton.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  buttonClickHandler() {
    // Set renderBall to true when the button is clicked
    this.setState({ renderBall: true });
  }

  handleKeyDown(event) {
    // Check for the right arrow key (ArrowRight or keyCode 39)
    if (event.key === "ArrowRight" || event.keyCode === 39) {
      this.setState((prevState) => ({
        ballPosition: prevState.ballPosition + 5, // Move ball 5px to the right
      }));
    }
  }

  renderBallOrButton() {
    if (this.state.renderBall) {
      // Render the ball and apply the ballPosition as the left style property
      return (
        <div
          className="ball"
          style={{ left: `${this.state.ballPosition}px` }}
        ></div>
      );
    } else {
      // Show the start button
      return <button onClick={this.buttonClickHandler}>Start</button>;
    }
  }

  componentDidMount() {
    // Add event listener for keydown to move the ball with the right arrow key
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    // Clean up the event listener when the component unmounts
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    return (
      <div className="playground">
        {this.renderBallOrButton()}
      </div>
    );
  }
}

export default App;

/*
import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            renderBall: false,
            posi : 0,
            ballPosition: { left: "0px" }
        };
        this.renderChoice = this.renderBallOrButton.bind(this)
        this.buttonClickHandler = this.buttonClickHandler.bind(this)
    };

    buttonClickHandler() {
   
   }
    renderBallOrButton() {
		if (this.state.renderBall) {
		    return <div className="ball" style={this.state.ballPosition}></div>
		} else {
		    return <button onClick={this.buttonClickHandler} >Start</button>
		}
    }

    // bind ArrowRight keydown event
    componentDidMount() {
      
    }

    render() {
        return (
            <div className="playground">
                {this.renderBallOrButton()}
            </div>
        )
    }
}


export default App;
*/