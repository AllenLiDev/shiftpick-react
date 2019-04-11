import React from 'react';

class Shift extends React.Component {
    add(id) {
        this.props.addToSaved(id);
    }

    remove(id) {
        this.props.removeFromSaved(id);
    } 

    render() {
        const { location, time } = this.props.shift;
        if (!this.props.remove) {
            return (
                <div>
                    location: {location}, time:{time}
                    <button type="button"
                        onClick={() => (this.add(this.props.shift))}>-save-</button>
                </div>
            );
        } else {
            return (
                <div>
                    location: {location}, time:{time}
                    <button type="button"
                        onClick={() => (this.remove(this.props.shift))}>-delete-</button>
                </div>
            )
        }
    }
}

export default Shift;