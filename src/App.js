import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ShowHide from './components/hoc/ShowHide/ShowHide';
import ShowHideMessage from './components/ShowHiddenMessage/ShowHideMessage';
import HidableDiv from './components/HidableDiv/HidableDiv';

class App extends Component {
  
  render() {
    const HiddenMessage = ShowHide(ShowHideMessage);
    const ColoredDiv = ShowHide(HidableDiv);
    return (
      <div className="App">
        <HiddenMessage expanded={true}> 
          Hello, my dear friend
        </HiddenMessage>

        <ColoredDiv expanded={true} colors={["red", "green", "blue", "yellow"]}>
          Background color will change each time when component shows!
        </ColoredDiv>
      </div>


    );
  }
}

export default App;
