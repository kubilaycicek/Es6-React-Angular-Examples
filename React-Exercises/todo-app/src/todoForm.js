import React, { Component } from 'react'

class TodoForm extends Component {

     constructor(props){
         super(props);
         this.addTask=this.addTask.bind(this);
     }

    addTask(e){
        e.preventDefault();
        const input = document.getElementById("todoInput");
        const val = input.value;
        this.props.addTask(val);
        input.value ="";
       
        
    }
    render() {
        return (
            <div>
            <div className="todo type1">
                <form className="input-wrapper" onSubmit={this.addTask}>
                    <input id="todoInput" type="text" className="add-todo" name="add-todo" placeholder="What needs to be done?" autoComplete="off" />
                </form>
            </div>
            <button type="button" onClick={this.addTask} className="add-btn" />
        </div>
        )
    }
}
export default TodoForm;