import React from 'react';
import Shift from './Shift';

const Shiftlist = (props) => {
    const shifts = props.shifts.map((shift) => {
        return <Shift key={shift.id} shift={shift} addToSaved={props.addToSaved} />
    });
    return <div>{shifts}</div>
}

export default Shiftlist;
