import React from "react";
import "./styles.css";
import { Route } from "react-router-dom";
import { connect } from 'react-redux';

import Products from "./components/Products";
import Cart from "./components/Cart";


function App(props) {
  return (
    <div className="App">
      <h1>
        Alışveriş Sepeti
        <img
          src="https://avatars3.githubusercontent.com/u/60869810?v=4"
          alt="React, Redux"
        />{" "}
        React, Redux
      </h1>
      <Route exact path="/" component={Products} />
      <Route path="/cart" component={Cart} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    bookList: state.bookList,
    cart: state.cart
  }
}

export default connect(mapStateToProps)(App);
