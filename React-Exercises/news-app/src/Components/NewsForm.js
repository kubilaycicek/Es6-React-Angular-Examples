import React, { Component } from 'react';

export default class NewsForm extends Component {
 constructor(props){
     super(props);
     this.addButton=this.addButton.bind(this);
 }
addButton(){
    this.props.addNews();
}
    render() {
        return (
            <div>
                <button onClick={this.addButton}>Add</button>
            </div>
        )
    }
}
