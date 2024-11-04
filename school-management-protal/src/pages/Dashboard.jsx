
import React from 'react';
import './Dashboard.css';
import SearchBar from './SearchBar';

const Dashboard = () => {

    const handleSearch = (query) => {
        console.log("Search query:", query);
    };

    return (
        <div  className="containerDashboard">
            
            <SearchBar onSearch={handleSearch} />
            <p>Welcome to Innomatic School DashBoard</p>

           
        </div>
    );
};

export default Dashboard;
