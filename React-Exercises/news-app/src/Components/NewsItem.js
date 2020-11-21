import React, { Component } from 'react'

export default class NewsItem extends Component {

    constructor(props){
        super();
    }
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.content}</p>
            </div>
        )
    }
}
