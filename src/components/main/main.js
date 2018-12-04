import React, { Component } from 'react';
import './main.css';
import Top from '../main-top';
import Cards from '../product-cards';
import Pagination from '../pagination';
import Filter from '../filter';
import SimpleSlider from '../slider';
export default class Main extends Component { 
    render() {
        const {products, onDeleted, paginationClick, currentPage, pageNumber, ipp, valueFilter, onValueChange, clearValue, sliderData} = this.props;

        return (
            <main className="main">
                <Top />
                <div className="container pb-md-5 pb-3 mb-md-5 mb-3">
                    <Filter 
                        onValueChange = { (e) => onValueChange(e)}
                        valueFilter = {valueFilter}
                        clearValue = {(e) => clearValue(e)}/> 
                    <Cards products = {products}
                        onDeleted = {(id) => onDeleted(id)}
                        pageNumber = {pageNumber}
                        ipp = {ipp}/>
                    <Pagination 
                        totalElements = {products.length}
                        ipp = {ipp}
                        currentPage = {currentPage}
                        paginationClick = { (id, number) => paginationClick(id,number)}/>
                </div>
                {sliderData.length > 0 && 
                    <div className="border-top slider-holder pb-md-5 pb-3 pt-md-5 pt-3">
                        <SimpleSlider 
                            sliderData = {sliderData}/>
                    </div>
                }
            </main>
        );
    }
}; 

