import React from 'react';
import './TodosLoading.css';

function TodosLoading() {
    return (
        <div className="loadingTodo-container">
            <div className="background">
                <div className="left">
                    <div className="image"></div>
                    <div className="mask think"></div>
                </div>
                <div className="right">
                    <div className="bar"></div>
                    <div className="mask thick"></div>
                    <div className="bar"></div>
                    <div className="mask thin"></div>
                    <div className="bar medium"></div>
                    <div className="mask thick"></div>
                    <div className="bar small"></div>
                </div>
            </div>
        </div>
    );
};

export { TodosLoading };