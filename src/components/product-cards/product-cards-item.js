import React, {Component} from 'react';
export default class CardItem extends Component {
    render() {
        const {title, src, price, oldPrice, onDeleted} = this.props;
        return (
            <div className="card">
                <div className="img-thumbnail__holder">
                    <img className="img-thumbnail" src={src} alt={title}/>
                    <button type="button" className="btn btn-link btn-thumbnail" onClick={onDeleted}>remove from list</button>
                </div>
                <div className="card-body d-flex justify-content-center flex-wrap">
                    <h5 className="card-title">{title}</h5>
                    <div className="card-row">
                        <h6 className="card-price">{price}</h6>
                        {oldPrice &&
                            <h6 className="card-price old-price">{oldPrice}</h6>
                        }
                    </div>
                    <div className="card-row">
                        <button type="button" className="btn btn-link card-btn" onClick={onDeleted}><i className="icon-trash"></i></button>
                        <button type="button" className="btn btn-link card-btn"><i className="icon-shopping-cart"></i></button>
                    </div>
                </div>
            </div>
        );
    };
}