import React, { Component } from 'react';

export default class PaginationItems extends Component {
    render() {
        const {pageNumber, paginationClick, currentPage, checkVal} =  this.props;
        let classess = "page-item";
        
        if (currentPage === checkVal) {
            classess += " active";
        }
        return (
            <li className={classess}>
                <span className="page-link" href="/" onClick={paginationClick}>{pageNumber}</span>
            </li>
        );
    };
};
