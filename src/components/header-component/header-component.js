import React, {Component} from 'react';
import HeaderNav from './header-component-navigation';
import Basket from './header-component-basket';
import Burger from './header-component-burger';


import './header-component.css'
const LogoBlock = () => {
    return (
        <div className="logo-holder  my-0">
            <a href="https://codeit.us" className="main-link">
                <div className="logo-company__top">Code<i>IT</i></div>
                <span className="logo-company__bottom">store</span>
            </a>
        </div>
    );
};
export default class Header extends Component {
    constructor() {
        super();
        this.state = {
            menuToggle: false
        };
        this.toggleMenu = (e) => {
            
            this.setState(()=>{
                return {
                    menuToggle: !this.state.menuToggle
                };
            });
        };
    }; 
    render() {
        const {menuToggle} = this.state;
        return (
            <header className = "header">
                <div className = "container d-flex flex-md-row align-items-center flex-wrap navbar-expand-lg">
                    <LogoBlock />
                    <HeaderNav 
                        menuToggle = {menuToggle}/>
                    <Burger 
                        toggleMenu = {this.toggleMenu}
                        menuToggle = {menuToggle}/>
                    <Basket />
                </div>
            </header>
        );
    };
};

