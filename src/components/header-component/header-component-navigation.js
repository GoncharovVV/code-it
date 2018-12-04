import React, {Component} from 'react';
export default class HeaderNav extends Component {
    constructor() {
        super();
        this.state = {
            subMenuToggle: false
        };
        this.toggleSubMenu = (e) => {
            e.preventDefault();
            this.setState(()=>{
                return {
                    subMenuToggle: !this.state.subMenuToggle
                };
            });
        };
    }; 
    render() {
        const {menuToggle} = this.props;
        let dropControlClasses = "dropdown nav-item";
        let dropMenuClasses = "dropdown-menu sub-menu";
        if (this.state.subMenuToggle) {
            dropControlClasses += " show";
            dropMenuClasses += " show";
        }
        let navbarClasses = "navbar-collapse";
        if (!menuToggle) {
            navbarClasses += " collapse";
        }
        return (
            <nav className="navbar  ml-md-auto">
                <ul className={navbarClasses} id="navbars01">
                    <li className="nav-item active"><a href="/" className="nav-link">Home</a></li>
                    <li className={dropControlClasses}>
                        <a href="/" className="nav-link dropdown-toggle" 
                            id="dropdown05" 
                            onClick = {this.toggleSubMenu}>
                            All brands 
                            <i className="icon-angle-down"></i>
                        </a>
                        <ul className={dropMenuClasses} aria-labelledby="dropdown05">
                            <li className="dropdown-item"><a href="/" className="dropdown-link">Iphone</a></li>
                            <li className="dropdown-item"><a href="/" className="dropdown-link">Samsung</a></li>
                            <li className="dropdown-item"><a href="/" className="dropdown-link">Nokia</a></li>
                        </ul>
                    </li>
                    <li className="nav-item"><a href="/" className="nav-link">Latest</a></li>
                    <li className="nav-item"><a href="/" className="nav-link">Fetured</a></li>
                    <li className="nav-item"><a href="/" className="nav-link">About</a></li>
                    <li className="nav-item"><a href="/" className="nav-link">Blog</a></li>
                    <li className="nav-item"><a href="/" className="nav-link">Contact</a></li>
                    <li className="nav-item"><a href="/" className="nav-link search-link"><i className="icon-search"></i></a></li>
                </ul>
            </nav> 
        );
    };
};


