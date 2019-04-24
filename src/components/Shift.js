import React from 'react';

class Shift extends React.Component {
    add(id) {
        this.props.addToSaved(id);
    }

    remove(id) {
        this.props.removeFromSaved(id);
    } 

    render() {
        const { location, time, type, status, dayOfWeek } = this.props.shift;
        if (!this.props.remove) {
            return (
                <div className="list-group-item">
                    location: {location}, time:{time}, type: {type}, status: {status}, day(s), {dayOfWeek}
                    <button type="button"
                        onClick={() => (this.add(this.props.shift))}>-save-</button>
                </div>
            );
        } else {
            return (
                <div className="list-group-item">
                    location: {location}, time:{time}, type: {type}, status: {status}, day(s), {dayOfWeek}
                    <button type="button"
                        onClick={() => (this.remove(this.props.shift))}>-delete-</button>
                </div>
            )
        }
    }
}

export default Shift;