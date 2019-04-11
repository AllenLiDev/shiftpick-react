import React from 'react';

class Shift extends React.Component {
    call(id) {
        this.props.addToSaved(id);
    }

    render() {
        console.log(this.props);
        const { id, location, time } = this.props.shift;
        return (
            <div>
                location: {location}, time:{time}
                <button type="button"
                    onClick={() => (this.call(id))}>-save-</button>
            </div>
        );
    }
}

export default Shift;