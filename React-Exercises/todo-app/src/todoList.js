import React, { Component } from 'react';

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.doneTask = this.doneTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
        this.todoListFilter = this.todoListFilter.bind(this);
    } 


    doneTask(e) {
       this.props.doneTask(e.target.parentNode.id);
    }

    removeTask(e) {
        this.props.removeTask(e.target.parentNode.id);

    }

    todoListFilter(param){  
        console.log(param);
    }

    render() {
        let items_left = 0;
        const items_right = null;
        const items = this.props.myTasks.map((elem, i) => {
            
            if(elem.status==="passive"){
                items_left++;
            }
            
            
            let task_id = "task_" + i;
            return (
                <li key={i} id={task_id} className={elem.status} >
                    <span className={"id"}>{i + 1}</span>
                    <span className={"title"}> {elem.text}</span>
                    <span className={"type"} onClick={this.doneTask} />
                    <span className={"delete"} onClick={this.removeTask} />

                </li>
            )
        });
        return (
            <div>
                <div className="todo-list type1">
                    <ul>
                        {items}
                    </ul>
                </div>
                <div className="todo-filter type1">
                    <div className="left">
                        <span><b>{items_left}</b> items left</span>
                    </div>
                    <div className="right" >
                        <ul>
                            <li className="active"><span onClick={this.todoListFilter("All")}     >All</span></li>
                            <li><span onClick={this.todoListFilter("Active")}>Active</span></li>
                            <li><span onClick={this.todoListFilter("Completed")}>Completed</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default TodoList;