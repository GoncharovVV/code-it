
import React, { Component } from 'react';
import Header from '../header-component';
import Main from '../main';
import Footer from '../footer';
import DataJson from '../data/data';
import DataSliderJson from '../data-slider/data-slider';

export default class App extends Component { 
    constructor() {
        super();
        this.state = {
            products: DataJson,
            sliderData: DataSliderJson,
            currentPage: 'page1',
            pageNumber: 1,
            ipp: 8,
            valueFilter: '',
        };
        this.deleteItem = (id) => {
            let newArr = [];
            this.setState(({ products })=>{
                const idx  = products.findIndex((el) => el.id === id);

                newArr = [
                    ...products.slice(0, idx),
                    ...products.slice(idx + 1)
                ];
                const pagesCount = Math.ceil(newArr.length / this.state.ipp);
                if ((pagesCount < this.state.pageNumber) && (this.state.pageNumber > 1)) {
                    const newCurrPage = `page${pagesCount}`;
                    return {
                        products: newArr,
                        currentPage: newCurrPage,
                        pageNumber: pagesCount
                    };
                }
                return {
                    products: newArr
                };
                
            });
        };
        this.paginationClick = (id,number) => {
            this.setState(()=>{
                return {
                    currentPage: id,
                    pageNumber: number
                };
            });
        };
        this.onValueChange = (e) => {
            const newValue = e.target.value;
           
            this.setState(({products})=>{
                return {
                    valueFilter: newValue,
                };
            });
        };
        this.search = (products, valueFilter) => {
            if (valueFilter.length === 0) {
                return products;
            }
            return products.filter((item) => {
                 return (item.title).toUpperCase().indexOf(valueFilter.toUpperCase()) > -1;
            });
        };
        this.clearValue = (e) => {
            e.preventDefault();
            const emptyValue = '';
            this.setState(()=>{
                return {
                    valueFilter: emptyValue
                };
            });
        };
    }; 
    render() {
        const {products, valueFilter, sliderData} = this.state;
        const visibleItems = this.search(products, valueFilter);
        
        return (
            <div className="wrapper">
                <Header />
                <Main products = {visibleItems}
                    pageNumber = {this.state.pageNumber}
                    onDeleted={ this.deleteItem }
                    currentPage={this.state.currentPage}
                    paginationClick = {this.paginationClick}
                    valueFilter = {this.state.valueFilter}
                    onValueChange = {this.onValueChange}
                    clearValue = {this.clearValue}
                    ipp = {this.state.ipp}
                    sliderData = {sliderData}/>
                <Footer />
            </div> 
        );  
    };
}; 