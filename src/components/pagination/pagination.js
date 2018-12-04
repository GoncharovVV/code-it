import React from 'react';
import PaginationItem from './pagination-item';
import './pagination.css'
const Pagination = ({totalElements, ipp, paginationClick, currentPage}) => {
    
    const pagesCount = Math.ceil(totalElements / ipp);
    const arrToLoop = [...Array(pagesCount)];
    let counter = 0;
    const elements = arrToLoop.map(()=>{
        counter++
        let number = counter;
        const id = `page${counter}`;
        return (
            <PaginationItem pageNumber = {counter}
               key ={id} 
               checkVal = {id}
               currentPage = {currentPage}
               paginationClick={() => paginationClick(id, number)}/>
        );
    }); 
    return (
        <div className="pb-md-4 pt-md-4 pb-3 pt-3"> 
            {pagesCount > 1 &&
                <nav aria-label="Page navigation">
                    <ul className="pagination justify-content-center">
                        {elements}
                    </ul>
                </nav>
            }
        </div>
    );
};

export default Pagination;