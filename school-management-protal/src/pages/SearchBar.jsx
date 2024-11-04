import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(query); 
    };

    return (
        <div className="containerSearch my-4">
            <form onSubmit={handleSearch} className="d-flex justify-content-center">
                <input
                    type="text"
                    className="form-control me-2"
                    placeholder="Search..."
                    value={query}
                    onChange={handleInputChange}
                    required
                />
                <button type="submit" className="btn btn-primary">Search</button>
            </form>
        </div>
    );
};

export default SearchBar;
