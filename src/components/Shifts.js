import React from 'react';
import Shiftlist from './Shiftlist';

class Shifts extends React.Component {
    render() {
        return (
            <div>
                <div>Shift List 1</div>
                <Shiftlist shifts={this.props.shifts} addToSaved={this.props.addToSaved} />
            </div>
        );
    }
}

export default Shifts;