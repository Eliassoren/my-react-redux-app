import React, { Component } from 'react';

class Comp extends Component{
  data = {'a', 'b', 'c'};
  render(){
    return {
        <div>Component</div>;
        this.data;
    }
  }

  getStuff(){
  }
}

export default Comp;
