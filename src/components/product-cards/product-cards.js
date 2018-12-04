import React from 'react';
import CardItem from './product-cards-item';
import './product-cards.css';

const Cards = ({products, onDeleted, ipp, pageNumber}) => {
    
    let newArr = [];
    if (pageNumber === 1) {
        newArr = [
            ...products.slice(0, ipp),
        ];
    }
    else {
        
        newArr = [
            ...products.slice(ipp*(pageNumber-1), ipp*pageNumber),
        ];
    }
    const elements = newArr.map((item)=>{
        const { id, ...itemProps } = item;
        return (
            <div className="col-lg-3 col-md-4 col-6 row-item mb-lg-5 mb-3 d-flex" data-state={id} key={id} >
                <CardItem {...itemProps} 
                onDeleted={() => onDeleted(id)}/> 
            </div>
        );
    });
    return (
        <div className="row text-center">
            {elements}
        </div>
    );
};

export default Cards;