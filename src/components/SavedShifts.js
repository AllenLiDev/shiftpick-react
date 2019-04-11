import React from 'react';
import Shiftlist from './Shiftlist'

class SavedShifts extends React.Component {
    render() {
        return (
            <div>
                <div>Saved shifts</div>
                <Shiftlist shifts={this.props.savedShifts} />
            </div>
        );
    }
}

export default SavedShifts;