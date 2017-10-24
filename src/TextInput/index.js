import React, { Component } from 'react';
class TextInput extends Component {
  render() {
    return (
        <div className="mainConatiner">
            <div className="row justify-content-center">
                <div className="col-4">
                    <h2>Enter a phrase</h2>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-4">
                    <textarea rows="4" cols="50" className="mx-auto" onChange={this.props.handleChange} value={this.props.value}></textarea>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-3">
                    <button type="button" className="btn btn-primary" onClick={this.props.onClick}>submit</button>
                </div>
                <div className="col-1">
                     <p>{140-this.props.value.length}</p>
                </div>
            </div>
        </div>
    );
  }
}

export default TextInput;
