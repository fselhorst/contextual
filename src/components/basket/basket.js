import React from 'react';
import { compose } from "redux";
import { withBasket } from "../../context/basket-context";
import { withStore } from "../../context/store-context";

const BasketComponent = ({basket}) => {

    return (
        <div id="basket">
            <h4>Products from basketContext</h4>
            {basket.products.map(product => <p key={product}>{product}</p>)}
        </div>
    )
};

export const Basket = compose(
    withBasket,
    withStore
)(BasketComponent);
