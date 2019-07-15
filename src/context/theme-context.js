import React, { createContext, useContext } from 'react'

const defaultTheme = {
    fontSize: 16,
    backgroundColor: '#f7f7f7'
};

export const redTheme = {
    ...defaultTheme,
    color: 'red',
};

export const blueTheme = {
    ...defaultTheme,
    color: 'blue'
};

export const greenTheme = {
    ...defaultTheme,
    color: 'green'
};

export const ThemeContext = createContext(greenTheme);

export const withTheme = Component => props => {
    const theme = useContext(ThemeContext);
    return <Component {...props} theme={theme} />
};
