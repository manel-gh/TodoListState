import React from "react";
const TodoList = ({ list, handleDelete }) => {
  return (
    <div>
      <h2>List of Items</h2>
      {list.map((el, i) => (
        <ul key={el.id}>
          <li>
            {el.item}
            <button onClick={() => handleDelete(el.id)}>
              Delete
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
};


  
  export default TodoList;