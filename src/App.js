import React, { Component } from 'react';
import './styles/css/styles.min.css';
import FlowerCanvas from './FlowerCanvas';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <div className="row">
              <div className="col-12">
                  <h1 className="App-title text-white bg-dark text-center">Flower Generator</h1>
              </div>
            </div> 
        </header>
        <FlowerCanvas />
            
      </div>
    );
  }
}

export default App;
