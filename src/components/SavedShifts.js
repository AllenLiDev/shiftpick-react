import React from 'react';
import ShiftSavedList from './ShiftSavedList'

class SavedShifts extends React.Component {
    render() {
        return (
            <div>
                <ul className="list-group">
                    <div className="list-group-item active">Saved shifts</div>
                    <ShiftSavedList shifts={this.props.savedShifts} removeFromSaved={this.props.removeFromSaved} />
                </ul>
            </div>
        );
    }
}

export default SavedShifts;