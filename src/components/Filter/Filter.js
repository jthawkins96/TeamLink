import React, { useRef } from 'react';

const Filter = props => {
    const filterRef = useRef(null)

    let items = props.items.map((item, index) => <option key={index} value={item.toLowerCase()}> {item} </option>)
    return (
        <select onChange={() => props.filterResults(filterRef.current.value, props.filters, props.updateFilters, props.updateList, props.windowWidth, props.modalFns)} ref={filterRef} className="search-filter bg-white border rounded p-1 h-100">
            {items}
        </select>
    );
}

export default Filter;