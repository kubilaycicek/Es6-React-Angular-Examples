import React from 'react';

function ProductItem(props) {
      return (
            <div key={props.book.id} className="book">
                  <img src={props.book.image} alt={props.book.name} />
                  <div>
                        <h4>{props.book.name}</h4>
                        <p>Yazar: {props.book.author}</p>
                        <p>Fiyat: &#8378; {props.book.price}</p>
                        <button onClick={() => props.onAdd(props.book)}  >Sepete Ekle</button>
                  </div>
            </div>
      )
}

export default ProductItem;