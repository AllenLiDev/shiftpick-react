import React from 'react';
import ShiftSavedList from './ShiftSavedList'

class SavedShifts extends React.Component {
    render() {
        return (
            <div>
                <div>Saved shifts</div>
                <ShiftSavedList shifts={this.props.savedShifts} removeFromSaved={this.props.removeFromSaved} />
            </div>
        );
    }
}

export default SavedShifts;