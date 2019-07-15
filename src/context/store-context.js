import React, { createContext, useContext } from 'react'

export const initialStoreState = {
    common: {},
};

export const StoreContext = createContext(initialStoreState);

export const withStore = Component => props => {
    const store = useContext(StoreContext);
    return <Component {...props} store={store} />
};

