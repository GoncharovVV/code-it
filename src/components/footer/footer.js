import React, {Component} from 'react';
import './footer.css'
export default class Footer extends Component { 
    constructor() {
        super();
        this.state = { 
            emailValue: '',
            emailValid: true,
            formError: 'Incorrect data'
        };
        this.handleUserInput = (e) => {
            const value = e.target.value;
            this.setState({
                emailValue: value,
                emailValid: true
            });
        };
        this.validateForm = (e) => {
            e.preventDefault();
            let newValue = this.state.emailValue.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            this.setState(({ products })=>{
                return {
                    emailValid: newValue
                }
            });
        }
    }; 
    render() {
        let errorFiledClasses = "hidden";
        let emailFiledClasses = "form-control";
        let emailIconClasses = "icon-envelope-o position-absolute";
        if(!this.state.emailValid) {
            errorFiledClasses += " show";
            emailFiledClasses += " error";
            emailIconClasses += " error";
        }
        return (
            <footer className="footer border-top">
                <div className="container pt-md-5 pb-md-5 pt-4 pb-4">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 subscribe-description align-self-center">
                            subscribe to latest smartphones
                            news & great deals we offer
                        </div>
                        <div className="col-lg-4 col-md-6 mt-md-0 mt-3">
                            <form action="" method="" onSubmit={this.validateForm} noValidate>
                                <div className="form-group">
                                    <input type="email" className={emailFiledClasses} 
                                        value={this.state.emailValue} 
                                        id="exampleInputEmail1" 
                                        aria-describedby="emailHelp" 
                                        placeholder="Enter Your Email Address ..."
                                        onChange={this.handleUserInput}/>
                                    <i className={emailIconClasses} ></i>
                                    <span className={errorFiledClasses}>{this.state.formError}</span>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-4 d-flex col-md-12 mt-lg-0 mt-3">
                            <ul className="socials">
                                <li className="socials-item d-flex mt-lg-0 mb-lg-0 mt-1 mb-1">
                                    <a href="/" className="socials-link"><i className="icon-twitter"></i></a>
                                </li>
                                <li className="socials-item d-flex mt-lg-0 mb-lg-0 mt-1 mb-1">
                                    <a href="/" className="socials-link"><i className="icon-facebook"></i></a>
                                </li>
                                <li className="socials-item d-flex mt-lg-0 mb-lg-0 mt-1 mb-1">
                                    <a href="/" className="socials-link"><i className="icon-linkedin"></i></a>
                                </li>
                                <li className="socials-item d-flex mt-lg-0 mb-lg-0 mt-1 mb-1">
                                    <a href="/" className="socials-link"><i className="icon-google-plus"></i></a>
                                </li>
                                <li className="socials-item d-flex mt-lg-0 mb-lg-0 mt-1 mb-1">
                                    <a href="/" className="socials-link"><i className="icon-pinterest-p"></i></a>
                                </li>
                                <li className="socials-item d-flex mt-lg-0 mb-lg-0 mt-1 mb-1">
                                    <a href="/" className="socials-link"><i className="icon-youtube-play"></i></a>
                                </li>
                                <li className="socials-item d-flex mt-lg-0 mb-lg-0 mt-1 mb-1">
                                    <a href="/" className="socials-link"><i className="icon-rss"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <div className="container footer__bottom-container pt-md-4 pb-md-4 pt-3 pb-3 d-flex justify-content-between align-items-center">
                        <p className="copyright">Copyright © 2015 <strong>codeitStore</strong> All Rights Reserved.</p>
                        <ul className="payment">
                            <li className="payment-item">
                                <a href="/" className="payment-link">
                                    <img src="/images/payment/card.jpg" alt="payment"/>
                                </a>
                            </li>
                            <li className="payment-item">
                                <a href="/" className="payment-link">
                                    <img src="/images/payment/card2.jpg" alt="payment"/>
                                </a>
                            </li>
                            <li className="payment-item">
                                <a href="/" className="payment-link">
                                    <img src="/images/payment/card3.jpg" alt="payment"/>
                                </a>
                            </li>
                            <li className="payment-item">
                                <a href="/" className="payment-link">
                                    <img src="/images/payment/card4.jpg" alt="payment"/>
                                </a>
                            </li>
                            <li className="payment-item">
                                <a href="/" className="payment-link">
                                    <img src="/images/payment/card5.jpg" alt="payment"/>
                                </a>
                            </li>
                            <li className="payment-item">
                                <a href="/" className="payment-link">
                                    <img src="/images/payment/card6.jpg" alt="payment"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }
}; 
