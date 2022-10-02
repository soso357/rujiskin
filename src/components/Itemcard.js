import React from "react";
import { useCart } from "react-use-cart";
import "./styles.css";

const Itemcard = (props) => {
  const { addItem } = useCart();
  console.log(props);
  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div class="card p-0 overflow-hidden h-100 shadow">
        <img className="logo" src={props.img} alt="" />

        <div class="card-body text-center">
          <h5 class="card-title">{props.title}</h5>
          <h5 class="card-title"> $ {props.price}</h5>

          <p class="card-text">{props.desc}</p>
          <button
            class="btn btn-success"
            onClick={() => addItem(props.item.id)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};



  



export default Itemcard;


