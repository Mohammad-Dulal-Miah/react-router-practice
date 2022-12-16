import React from 'react';
import './Shirt.css';

const Shirt = ({shirt , handleCart}) => {

    const{name, price ,img} = shirt;

   
    return (
        <div className='shirt-container'>
             <img src={img} alt=""/>
             <h4>{name}</h4>
             <p>Price: {price}$</p>
             <button onClick={()=>handleCart(shirt)}>Add to Cart</button>
       
        </div>
    );
};

export default Shirt;