import React, { Component } from 'react';

class Comp extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
        <div className="container">
          <div>Id: {this.props.id}</div>
          <div>Name: {this.props.name}</div>
          <div>Data: {this.props.data}</div>
        </div>
    );
  }
}

export default Comp;
