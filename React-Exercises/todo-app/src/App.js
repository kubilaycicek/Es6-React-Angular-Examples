import React, { Component } from 'react';
import TodoList from './todoList';
import Header from './inc/header.js';
import Footer from './inc/footer.js';
import TodoForm from './todoForm.js';

const myTasks = ["Yapılacak iş", "Yapılacak iş", "Yapılacak iş", "Yapılacak iş", "Yapılacak iş"];

class App extends Component {


  constructor() {
    super();
    this.state = {
      myTasks: [{ text: 'Kitap oku', status: 'active' },
      { text: 'Interstellar izle', status: 'active' },
      { text: 'Projeyi github\'da paylaş', status: 'active' }]
    };

    this.addTask = this.addTask.bind(this);
    this.removeTask=this.removeTask.bind(this);
    this.doneTask=this.doneTask.bind(this);
  }


  removeTask(id){
    id = id.replace("task_","");
    let updatedList= this.state.myTasks;
    updatedList.splice(id,1);
    this.setState({myTasks:updatedList});

  }

  doneTask(id){
    id = id.replace("task_","");
    let updatedList= this.state.myTasks;
    let newStatus="active";
    let currentStatus=updatedList[id].status;
    if(currentStatus==="active"){
      newStatus="passive";
    }

    updatedList[id].status=newStatus;

    this.setState({myTasks:updatedList});

  }

  addTask(val) {
    let updatedList = this.state.myTasks;
    updatedList.push({text:val,status:"passive"});
    this.setState({ myTasks: updatedList });

  }
  render() {
    return (
      <div className="content">
        <Header />
        <TodoForm addTask={this.addTask}  />
        <TodoList myTasks={this.state.myTasks} doneTask={this.doneTask} removeTask={this.removeTask}  />
        <Footer />
      </div>
    )
  }
}
export default App;

