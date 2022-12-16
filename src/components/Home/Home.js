import React, { useState } from 'react';
import { useShirt } from '../../Hooks/useShirt';
import Cart from '../Cart/Cart';
import Shirt from '../Shirt/Shirt';
import './Home.css';

const Home = () => {

    const [shirts] = useShirt();
    const [cart , setCart] = useState([]);

    const handleCart = (clickedShirt) =>{
        
        const selectShirt = shirts.find(shirt => shirt.id === clickedShirt.id);

        if(selectShirt){
            clickedShirt.quantity = clickedShirt.quantity + 1;
            const others = cart.filter(shirt => shirt.id !== clickedShirt.id);
            setCart([clickedShirt , ...others]);
        }

        else{
            clickedShirt.quantity = 1;
            setCart([...cart , clickedShirt]);
        }

        console.log(clickedShirt);
    }

    const removeFromCart = (selectedShirt) =>{

        const others = cart.filter(shirt => shirt.id !== selectedShirt.id);
        setCart([...others]);
    }

    return (
        <div className='home-container'>
            <div className='shirts-container'>
               {
                shirts.map(shirt => <Shirt
                                     shirt={shirt}
                                     handleCart={handleCart}
                                     key={shirt.id}
                ></Shirt>)
               }
            </div>

            <div className='cart-container'>
                <Cart cart={cart} removeFromCart={removeFromCart}></Cart>
            </div>


        </div>
    );
};

export default Home;