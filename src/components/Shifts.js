import React from 'react';
import Shiftlist from './Shiftlist';

class Shifts extends React.Component {
    render() {
        return (
            <div>
                <ul className="list-group">
                    <div className="list-group-item active">Shifts</div>
                    <Shiftlist shifts={this.props.shifts} addToSaved={this.props.addToSaved} />
                </ul>
            </div>
        );
    }
}

export default Shifts;