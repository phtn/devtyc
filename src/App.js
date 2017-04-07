import React, { Component } from 'react';

import Game from './components/game'

//import B from './components/demo-b'

import './App.css';

const styles = {
  div: {
    height: 400,
    padding: 10
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={styles.div}>
          <Game name='game-component'/>
        </div>
      </div>
    );
  }
}
export default App;
