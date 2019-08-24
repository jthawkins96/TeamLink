import React, { useRef } from 'react';

const SearchBar = props => {
    let filterRef = useRef();

    return (
        <div className="d-inline-block">
            <div className="input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-search"></i>
                    </div>
                </div>
                <input type="text" ref={filterRef} onChange={() => props.filterResults(filterRef.current.value, props.filters, props.updateFilters, props.updateList, props.windowWidth, props.modalFns)} className="form-control" />
            </div>
        </div>
    );
}

export default SearchBar;