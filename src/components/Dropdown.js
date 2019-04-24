import React from 'react';
class Dropdown extends React.Component {
   
    render() {
        let count = 0;
        const dropdownItems = this.props.options.map((option) => {
            return <div key={count++} className="dropdown-item" onClick={() => this.props.setDropdown(this.props.id, option)}>{option}</div>
        });
        return (
            <div>
                <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {this.props.options[0]}
                </button>
                <div className="dropdown-menu">
                    {dropdownItems}
                </div>
            </div>
        );
    }
}

export default Dropdown;