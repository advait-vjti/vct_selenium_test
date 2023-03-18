import React, { useContext, useState } from "react";
import { AppContext, categories } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";

const AddExpenseForm = (props) => {
  const { dispatch } = useContext(AppContext);

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [cat, setCat] = useState(Object.keys(categories)[0]);
  
  let cats = [];

  for (let c in categories) {
    cats.push(categories[c]);
  }
  // console.log(cats);

  const onSubmit = (event) => {
    event.preventDefault();
    const expense = {
      id: uuidv4(),
      name,
      cost: parseInt(cost),
      category: categories[cat],
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });

    setName("");
    setCost("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div class="row">
        <div class="col-sm col-lg-4">
          <label for="name">Name</label>
          <input
            required="required"
            type="text"
            class="form-control"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div class="col-sm col-lg-4">
          <label for="cost">Cost</label>
          <input
            required="required"
            type="number"
            class="form-control"
            id="cost"
            value={cost}
            onChange={(event) => setCost(event.target.value)}
          />
        </div>
        <div class="col-sm col-lg-4">
          <label for="category">Category</label>
          <select 
            id="category" 
            name="category" 
            class="form-control"
            onChange={(e) => {
                // console.log(e.target.value);
                setCat(e.target.value);
            }} 
            >
            {cats.map((cat) => (
              <option value={cat.name}>{cat.name}</option>
            ))}
          </select>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-sm">
          <button type="submit" class="btn btn-primary">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
