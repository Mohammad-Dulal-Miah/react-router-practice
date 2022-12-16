import React from 'react';
import './Cart.css';


const Cart = ({cart , removeFromCart}) => {

  let command;

  if(cart.length === 0){
    command = <p>please add at least one item!!! </p>
  }
  else if(cart.length === 1){
    command = <p>please add one more item</p>
  }
  else{
    command = <p>Thanks for adding....</p>
  }
    return (
        <div>
          <h2>{command}</h2>
          {
            cart.map(shirt => <p>

             {shirt.name}
             <br/>
             <button onClick={()=>removeFromCart(shirt)}>Remove from Cart</button>

            </p>)
          }
          
          {
            (cart.length < 4) ? <p>Please add more...</p>:<p>Thanks miah</p>
          }
        </div>
    );
};

export default Cart;