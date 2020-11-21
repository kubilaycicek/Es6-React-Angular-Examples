import React from "react";
import { Link } from "react-router-dom";
import ProductItem from '../ProductItem/index';
import { connect } from 'react-redux';
import { addToCart } from '../../actions';

const Products = ({ bookList, addToCart }) => {

  const onAdd = book => {
    addToCart(book);
  }
  return (
    <div>
      <h2>
        <span>Kitap Listesi</span>
        <Link to="/cart">Sepetim</Link>
      </h2>
      {
        bookList.map(book => <ProductItem key={book.id} book={book} onAdd={onAdd}     ></ProductItem>)
      }
    </div>
  );
};

const mapStateToProps = state => {
  return {
    bookList: state.bookList,
    cart: state.cart
  }
}
export default connect(mapStateToProps, { addToCart })(Products);
