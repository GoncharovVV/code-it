import React, {Component} from 'react';
import './filter.css';
export default class Filter extends Component {
    // onValueChange = (e) => {
    //     console.log(e.target.value);
    // };
    render() {
        const {onValueChange, clearValue, valueFilter} = this.props;
        let buttonClasses = 'btn btn-clear';
        if (valueFilter.length === 0) {
            buttonClasses += ' disabled';
        }
        
        return (
            <div className=" mb-lg-5 mb-md-4 mb-3"> 
                <form className="form-inline mt-2 mt-md-0 justify-content-end" onSubmit={(e) => clearValue(e)}>
                    <input className="form-control mr-sm-2 mb-sm-0 mb-3" 
                        type="text" 
                        value={valueFilter}
                        placeholder="Search" 
                        aria-label="Search"
                        onChange={(e) => onValueChange(e)}/>
                    <button className={buttonClasses}
                        type="submit">Clear List</button>
                </form>
            </div>
        );
    };
}


