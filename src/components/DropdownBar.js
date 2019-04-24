import React from 'react';
import Dropdown from './Dropdown.js';

const DropdownBar = (props) => {
    const dropdowns = props.dropdown.map((options) => {
        return (
            <Dropdown key={options.id} id={options.id} options={options.options} setDropdown={props.setDropdown} />
        );
    });
    return (
        <div className="btn-group">
            {dropdowns}
        </div>
    );
}

export default DropdownBar;
