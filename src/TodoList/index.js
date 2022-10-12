import React from 'react';
import './TodoList.css';

function TodoList(props) {
  const renderFunc = props.children || props.render;

  return (
    <section>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      
      {(!props.loading && !props.searcherTodos.length && !props.totalTodos) && props.onEmptyTodos()}

      {(!!props.totalTodos && !props.searcherTodos.length) && props.onEmptySearchResults()}
      
      <ul className='TodoListContainer'>
        
        {/* {props.children} */}
        
        {(!props.loading && !props.error) && props.searcherTodos.map(renderFunc)}
        
        {/* Otra manera de realizarlo:
      {props.searcherTodos.map(todo => props.render(todo))} */}
        
      </ul>
    </section>
  );
}

export { TodoList };