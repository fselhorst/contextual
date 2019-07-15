import React, { createContext, useContext } from 'react'

// initial state for the context provider
const initialBasket = {
    products: ['raspberry','apple','banana','orange','kiwi','mango','strawberry'],
    price: 0,
};

// create the actual context
export const BasketContext = createContext(initialBasket);

//create a composer that applies the context as a prop
export const withBasket = Component => props => {
    const basket = useContext(BasketContext);
    return <Component {...props} basket={basket} />
};

