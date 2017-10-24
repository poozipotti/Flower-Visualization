import React, { Component } from 'react';
import './styles/css/styles.min.css';
import FlowerCanvas from './FlowerCanvas';
import TextInput from './TextInput';
class App extends Component {
  
  constructor(props){
      super(props);
    this.state = 
    {
        textValue: '',
        submittedValue: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    if(e.target.value.length <= 140){
        this.setState({textValue: e.target.value});
    };
  }

  handleSubmit(e) {
    this.setState({submittedValue: this.state.textValue});
  }


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

        <TextInput handleChange={this.handleChange} value={this.state.textValue} onClick={this.handleSubmit}/>
        <FlowerCanvas textValue={this.state.submittedValue}/>
      </div>
    );
  }
}

export default App;
