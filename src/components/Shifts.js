import React from 'react';
import Shiftlist from './Shiftlist';

class Shifts extends React.Component {
    addToSaved(id) {
        console.log(id);
    } 

    render() {
        console.log(this.props.shifts);
        return (
            <div>
                <div>Shift List 1</div>
                <Shiftlist shifts={this.props.shifts} addToSaved={this.addToSaved}/>
            </div>
        )
    }
}

export default Shifts;