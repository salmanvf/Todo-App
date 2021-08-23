import { React, useEffect, useState } from "react";

//get data from localStorage
const getLocalItems = () => {
  let list = localStorage.getItem("lists");

  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [Items, SetItems] = useState(getLocalItems());
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditItem, setEditItem] = useState(null);

  //Add todo items
  const addItem = () => {
    if (!inputData) {
      alert("Please add your list!");
    } else if (inputData && !toggleSubmit) {
      console.log("Editable Item");

      SetItems(
        Items.map((elem) => {
          if (elem.id === isEditItem) {
            return { ...elem, name: inputData };
          }
          return elem;
        })
      );
      setToggleSubmit(true);

      setInputData("");

      setEditItem(null);
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };

      SetItems([...Items, allInputData]);

      setToggleSubmit(true);

      setInputData("");
    }
  };

  // edit the item
  // When user click on edit button

  // 1: get the id and name of the data which user clicked to edit
  // 2: set the toggle state for Add button into edit button
  // 3: Now update the value of the setInput with the new updated value to edit.
  // 4: To pass the current element Id to new state variable for reference

  const editItem = (id) => {
    let newEditItem = Items.find((ele) => {
      return ele.id === id;
    });

    console.log(newEditItem.name);

    setToggleSubmit(false);

    setInputData(newEditItem.name);

    setEditItem(id);
  };

  //Delete single item
  const deleteItem = (index) => {
    const updatedItems = Items.filter((elem) => {
      return index !== elem.id;
    });

    SetItems(updatedItems);
  };

  //remove All items
  const removeAll = () => {
    SetItems([]);
  };

  // set data to localStorage
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(Items));
  });

  return (
    <>
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
                onClick={addItem}
              ></i>
            ) : (
              <i
                className="far fa-edit add-btn"
                title="Update Item"
                onClick={addItem}
              ></i>
            )}
          </div>

          <div className="showItems">
            {Items.map((elem) => {
              return (
                <div className="eachItem" key={elem.id}>
                  <h3>{elem.name}</h3>
                  <div className="todo-btn">
                    <i
                      className="far fa-edit add-btn"
                      title="Edit Item"
                      onClick={() => editItem(elem.id)}
                    ></i>

                    <i
                      className="far fa-trash-alt add-btn"
                      title="Delete Item"
                      onClick={() => deleteItem(elem.id)}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>

          {/* clear all button  */}

          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={removeAll}
            >
              <span> CHECK LIST </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
