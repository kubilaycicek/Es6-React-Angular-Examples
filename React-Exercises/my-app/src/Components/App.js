import React, { Component } from 'react'
import '../App.css';
import Contacts from './Contacts';

 class App extends Component {

  constructor(props){
    super(props);
    this.addContact=this.addContact.bind(this);
  }

   state={
    contacts:[
      {
        id:1,
        name:'Kubilay',
        phone:'123456'
      },
      {
        id:2,
        name:'Sevilay',
        phone:'123456'
      }

    ]
   };

   addContact(contact){
     const {contacts}=this.state;
     contacts.push(contact);
     this.setState({
       contacts
     })
  
   }

  render() {
    return (
      <div className="App" > 
        <Contacts contacts={this.state.contacts}
         addContact={this.addContact}
         ></Contacts>
      </div>
    )
  }
}
export default App;