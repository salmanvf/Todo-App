import { useState, useContext } from "react";
import { TodoContext } from "../Context/TodoContext";

const TodoList = () => {
  const { todos, setTodos } = useContext(TodoContext);
  const [inputData, setInputData] = useState("");
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditItem, setEditItem] = useState(null);

  const addItem = () => {
    if (!inputData) {
      alert("Please add your list!");
    } else if (inputData && !toggleSubmit) {
      const checkEditObj = todos.map((elem) => {
        if (elem.id === isEditItem) {
          return { ...elem, name: inputData };
        }
        return elem;
      });

      setTodos(checkEditObj);

      setToggleSubmit(true);

      setInputData("");
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };

      setTodos([...todos, allInputData]);

      setToggleSubmit(true);

      setInputData("");
    }
  };

  const editItem = (todoId) => {
    const newEditItem = todos.find((ele) => {
      return ele.id === todoId;
    });

    setToggleSubmit(false);

    setInputData(newEditItem.name);

    setEditItem(todoId);
  };

  //Delete single item
  const deleteItem = (index) => {
    const deleteObj = todos.filter((item) => {
      return index !== item.id;
    });

    setTodos(deleteObj);
  };

  //remove All items
  const removeAll = () => {
    setTodos([]);
  };

  return (
    <div className="main-div">
      <div className="child-div">
        <figure>
          <figcaption>Add Your List Here</figcaption>
        </figure>

        <div className="addItems">
          <input
            input="text"
            className="form-control mt-4"
            placeholder="Add Items..."
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          {toggleSubmit ? (
            <i
              className="fa fa-plus add-btn"
              title="Add Item"
              onClick={() => addItem()}
            ></i>
          ) : (
            <i
              className="far fa-edit add-btn"
              title="Edit Item"
              onClick={() => addItem()}
            ></i>
          )}
        </div>

        <ul className="list-group">
          {todos.map((todo) => {
            const { id, name } = todo;

            return (
              <div key={id}>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  {name}

                  <div className="todo-btn">
                    <i
                      className="far fa-edit add-btn"
                      title="Edit Item"
                      onClick={() => editItem(id)}
                    ></i>
                    <i
                      className="far fa-trash-alt add-btn"
                      title="Delete Item"
                      onClick={() => deleteItem(id)}
                    ></i>
                  </div>

                  {/* <input type="checkbox" onClick={() => handleDelete(todo.id)} /> */}
                </li>
              </div>
            );
          })}
        </ul>
        {/* clear all button  */}

        <div className="showItems">
          <button
            className="btn"
            onClick={() => {
              removeAll();
            }}
          >
            <span> Clear All </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
