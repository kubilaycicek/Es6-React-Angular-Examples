import React, { Component } from 'react'

export default class Counter extends Component {
    state = {
        number: 0
    };

    increment = () => {
        console.log("+");
        this.setState({
            number: ++this.state.number
        });
    };

    decrement = () => {
        this.setState({
            number: --this.state.number
        })
    };

    render() {
        return (
            <div>
                <h2>{this.state.number}</h2>
                <button onClick={ this.increment }>+</button>
                <button onClick={ this.decrement }>-</button>
            </div>
        )
    }
}
