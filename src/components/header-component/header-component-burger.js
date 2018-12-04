import React, {Component} from 'react';
export default class Burger extends Component {
    render() {
        const {toggleMenu, menuToggle} = this.props;
        let burgerClasses = "navbar-toggler";
        if (!menuToggle) {
            burgerClasses += " collapsed";
        }
        return (
            <button className = {burgerClasses}
                type="button" 
                data-target="#navbars01"
                onClick = {(e) => toggleMenu(e)}>
                <span className="burger"></span>
            </button>
        );
    }
};


