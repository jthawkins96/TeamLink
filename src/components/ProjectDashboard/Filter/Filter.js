import React from 'react';

const Filter = props => {
    let items = props.items.map((item, index) => <option key={index} value={item.toLowerCase()}> {item} </option>)
    return (
        <select className="search-filter bg-white border rounded p-1 h-100">
            {items}
        </select>
    );
}

export default Filter;