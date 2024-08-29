import React from 'react';
import "./Checkout.css";
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { onAuthStateChanged } from 'firebase/auth';
import { useStateValue } from './Stateprovider';

import { firebaseAuth } from './firebase';
function Checkout() {
   const [{basket,user}, dispatch]=useStateValue();
   onAuthStateChanged(firebaseAuth,(authUser)=>{
   if (authUser) {
    // the user just logged in / the user was logged in
   dispatch({
      type: "SET_USER",
      user: authUser,
    })
  } else {
    // the user is logged out
    dispatch({
      type: "SET_USER",
      user: null,
    })
  }
});

   
  return (

    <div className="checkout">
    
    <div className="checkout__left">
        <img className='checkout__ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""
        />
<div>  
 <h3>Hello, {user?.email}</h3>
    <h2 className='checkout__title'>Your shopping basket</h2>
    {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
 

</div>
    </div>
    <div className="checkout__right">
   <Subtotal/>
    </div>

      
    </div>
  );
}

export default Checkout
