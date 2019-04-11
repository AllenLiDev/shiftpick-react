import React from 'react';
import Filter from './Filter';

const ActiveFilters = (props) => {
    const filters = props.filters.map((filter) => {
        //  needs a key index
        return <Filter key='' filter={filter} removeFilter={props.removeFilter} />
    });
    return <div>{filters}</div>;
}

export default ActiveFilters;