import React from 'react';

const Pagination = ({ currentPage, totalRecords, pageSize, setCurrentPage }) => {
    
    const totalPages = Math.ceil(totalRecords / pageSize);

    return (
        <div className="pagination">
            {/* Previous Button */}
            <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>Previous</button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, index) => (
                <button key={index + 1} onClick={() => setCurrentPage(index + 1)}>
                    {index + 1}
                </button>
            ))}

            {/* Next Button */}
            <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}>Next</button>
        </div>
    );
};

export default Pagination;