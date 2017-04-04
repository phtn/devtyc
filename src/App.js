import React, { Component } from 'react';

import B from './components/demo-b'

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
          <B name='Bravo'/>
        </div>
      </div>
    );
  }
}
export default App;
