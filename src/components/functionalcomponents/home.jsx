import React, { useState } from 'react';

const Home = () => {
    const [pageIndex, setPageIndex] = useState(1);

    const goToNextPage = () => {
        setPageIndex(2);
    };

    const goToPreviousPage = () => {
        if (pageIndex > 1) {
            setPageIndex(1);
        }
    };

    return (
        <div>
            <h1>Welcome to Home Page {pageIndex}</h1>
            <button onClick={goToPreviousPage}>
                Click to Previous state
            </button>
            <button onClick={goToNextPage}>Click to Next state</button>
            <br></br><br></br>
        </div>
    );
};

export default Home;
