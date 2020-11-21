import React, { Component } from 'react';
import PropTypes from 'prop-types';
 class Form extends Component {
    
    constructor(){
        super();
		this.onChange=this.onChange.bind(this);
		this.onSubmit=this.onSubmit.bind(this);
	}
	
	static propTypes={
		addContact:PropTypes.func
	}
    
    state={
        id:Math.random(200),
        name:'',
        phone:''
    };
    
    onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        });
	}
	onSubmit(e){
		e.preventDefault();
		this.props.addContact({
			...this.state
		});
		this.setState({
			id:0,
			name:'',
			phone:''
		});
	}

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit} >
					<input
						name="name"
						id="name"
						value={this.state.name}
						onChange={this.onChange}
						placeholder="Enter a name"/>
					<br/>
					<input
						name="phone"
						id="phone"
						value={this.state.phone}
						onChange={this.onChange}
						placeholder="Enter a phone"/>
					<button>Add</button>
				</form>
			</div>
		);
	}
}

export default Form;