import React from 'react';
import Breadcrumb from './main-top-breadcrumb';
import './main-top.css';
const Top = () => {
    return (
        <div className="main-top__wrapper"> 
            <div className="container d-flex flex-wrap align-items-center">
                <h1 className="title">My wishlist</h1>
                <Breadcrumb />
            </div>
        </div>
    );
};

export default Top;