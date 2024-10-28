// src/components/Dashboard.jsx

import React, { useEffect, useState, useCallback } from 'react';
import Pagination from './Pagination';
import Notification from './Notification';

const Dashboard = () => {
    const [data, setData] = useState([]);
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalRecords, setTotalRecords] = useState(0);

    // Memoize fetchData using useCallback
    const fetchData = useCallback(async () => {
        const response = await fetch(`/api/laptops?page=${currentPage}&limit=${pageSize}`);
        const result = await response.json();
        setData(result);

        // Fetch total records for pagination control (if you implement this)
        // Example: setTotalRecords(totalCount);
    }, [currentPage, pageSize]); // Dependencies for fetchData

    useEffect(() => {
        fetchData();

        // Polling for new records every few seconds (e.g., every 10 seconds)
        const intervalId = setInterval(fetchData, 10000);

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, [fetchData]); // Dependency on fetchData

    return (
        <div>
            <h1>Laptop Dashboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Product</th>
                        <th>Type</th>
                        <th>Inches</th>
                        <th>RAM</th>
                        <th>OS</th>
                        <th>Weight</th>
                        <th>Price (€)</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(record => (
                        <tr key={record.id}>
                            <td>{record.Company}</td>
                            <td>{record.Product}</td>
                            <td>{record.TypeName}</td>
                            <td>{record.Inches}</td>
                            <td>{record.Ram}</td>
                            <td>{record.OS}</td>
                            <td>{record.Weight}</td>
                            <td>{record.Price_euros}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination 
                currentPage={currentPage} 
                totalRecords={totalRecords} 
                pageSize={pageSize} 
                setCurrentPage={setCurrentPage} 
                setPageSize={setPageSize} 
            />
            <Notification />
        </div>
    );
};

export default Dashboard;