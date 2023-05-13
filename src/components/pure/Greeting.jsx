import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class Greeting extends Component {
    constructor(props){
        super(props);
        this.state = {
            age: 20   
        }
    }

  render() {
    return (
      <div>
        <h1>Hola! {this.props.name}</h1>
        <h2>Mi edad es: {this.state.age}</h2>
        <div>
        <button onClick={this.birthday}>
          Cumplir años
        </button>
        </div>
       
      </div>
    )
  }
  birthday = () => {
    this.setState((estadoPrevio) => {
      return {age: estadoPrevio.age +1}
    })
  }
}

Greeting.propsTypes = {
    name: PropTypes.string,

};
