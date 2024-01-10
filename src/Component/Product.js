import React from 'react'
import "./Product.css"
import { useStateValue } from './Stateprovider';

function Product({id, title, image, price, rating}) {

  const [{basket}, dispatch] = useStateValue();
// console.log('this is the basket',basket);
  const addToBasket=()=>{

dispatch({
  type: "ADD_TO_BASKET",
  item: {
    id: id,
    title: title,
    image: image,
    price: price,
    rating: rating,
  },
});
  }
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((e,i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      <img
        src={image}
        alt=""
      />
      <button onClick={addToBasket}>
        Add to Basket
        {/* <div class="basket__icon">
          <svg
            class="MuiSvgIcon-root"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M17.21 9l-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path>
          </svg>
        </div> */}
      </button>
    </div>
  );
}

export default Product
