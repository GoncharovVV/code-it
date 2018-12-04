
import React, {Component} from "react";
import Slider from "react-slick";
import './slider.css';

export default class SimpleSlider extends Component {
    render() {
        const {sliderData} = this.props;
        const elements = sliderData.map((item)=>{
            
            const { id, description, title, icon } = item;
            const iconClasses = `mr-3 slider-icon ${icon}`;
            
            return (
                <div className="slider-item pr-md-3 pl-md-3 pr-1 pl-1" key={id}>
                    <div className="media">
                        <i className={iconClasses}></i>
                        <div className="slider-right__column">
                            <h3 className="d-block slider-item__title">{title}</h3>
                            <p className="slider-item__description">{description}</p>
                        </div> 
                    </div>
                </div>
            );
        });

        var settings = {
            dots: false,
            arrows: false,
            infinite: true,
            autoplay: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
                {
                  breakpoint: 1199,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                  }
                },
                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        };
       
        return (
            <div className="container pb-md-5 pt-md-5 pb-3 pt-3">
                <div className="jumbotron">
                    <Slider {...settings}>
                        {elements}
                    </Slider>
                </div>
            </div>
        );
  }
}