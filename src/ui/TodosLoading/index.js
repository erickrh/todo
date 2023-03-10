import React from 'react';
import './TodosLoading.css';

function TodosLoading() {
  return (
    <div className="LoadingTodo-container">
      <div className="background">
        <span className="LoadingTodo-completeIcon"></span>
        <span className="LoadingTodo-text"></span>
        <span className="LoadingTodo-deleteIcon"></span>
      </div>
    </div>
  );
}

export { TodosLoading };