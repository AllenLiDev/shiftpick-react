import React from 'react';
import Shift from './Shift';

const Shiftlist = (props) => {
    const shifts = props.shifts.map((shift) => {
        return <Shift shift={shift} removeFromSaved={props.removeFromSaved} remove='1' />
    });
    return <div>{shifts}</div>
}

export default Shiftlist;
