import React from 'react';

const SearchBar = () => {
    return (
        <div className="d-inline-block">
            <div className="input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-search"></i>
                    </div>
                </div>
                <input type="text" className="form-control" />
            </div>
        </div>
    );
}

export default SearchBar;