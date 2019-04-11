import React from 'react';

class Filter extends React.Component {
    remove(keyword) {
        this.props.removeFilter(keyword);
    }

    render() {
        return (
            <button onClick={() => (this.remove(this.props.shift))} type="button" className="btn btn-primary">
                {this.props.filter} <i className="fas fa-times-circle"></i>
            </button>
        );
    }
}

export default Filter;