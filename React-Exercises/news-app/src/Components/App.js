import React from 'react';
import News from './News.js';
import './App.css';

const news = [{
  id: 0,
  title: "Apple",
  content: "-"
},
{
  id: 1,
  title: "Banana",
  content: "-"
},
{
  id: 2,
  title: "Orange",
  content: "-"
}];

 class App extends React.Component {
  addNews(){
    console.log("addnews çalıştı"); 
    news.push({
      id:4,
      title:"4",
      description:"description"
    });
    console.log(news);
  };
  render() {
   
    return (
      <div className="App">
      <News news={news}  addNews={this.addNews}></News>
    </div>
    )
  }
}

export default App;