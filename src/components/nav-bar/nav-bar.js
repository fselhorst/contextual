import React from 'react'
import { compose } from 'redux'
import { withTheme } from "../../context/theme-context";
import { Basket } from "../basket/basket";
import { withNav } from "../../context/nav-context";

const NavBarComponent = ({theme, nav}) => {
    const { items } = nav;

    return (
        <nav>
            <h4>Styled with themeContext, data from NavContext</h4>
            <ul>
                {items.map( ({label, url}) =>
                    <li style={{backgroundColor: theme.backgroundColor}} key={label}>
                        <a style={{color:theme.color}} href={url}>{label}</a>
                    </li>
                )}
            </ul>
            <Basket/>
        </nav>
    )
};

export const NavBar = compose(
    withTheme,
    withNav
)(NavBarComponent);
