import React, { createContext, useContext } from 'react'

export const initialNavState = {
    items: [
        {
            label: 'Home',
            url: '/'
        },
        {
            label: 'Products',
            url: '/products'
        }
    ]
};

export const NavContext = createContext(initialNavState);

export const withNav = Component => props => {
    const nav = useContext(NavContext);
    return <Component {...props} nav={nav} />
};

