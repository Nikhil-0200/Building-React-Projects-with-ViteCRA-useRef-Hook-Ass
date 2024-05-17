import "./App.css";
import { useState } from "react";

function UI(props) {
  let { task, status } = props;

  return (
    <div>
      <ul>
        <li>Task: {task}</li>
        <li>Status: {status ? "Yes" : "No"}</li>
      </ul>
    </div>
  );
}

function App() {
  let [array, setArray] = useState([]);
  let [data, setData] = useState({
    task: "",
    status: false,
  });

  let handleChange = (event) => {
    let value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    let newData = { ...data, [event.target.name]: value };
    setData(newData);
  };

  let handleSubmit = (event) => {
    event.preventDefault();

    let storeData = { ...data, id: Date.now() };

    let newArray = [...array, storeData];

    setArray(newArray);

    setData({
      task: "",
      status: false,
    });
  };

  return (
    <>
      <div>
        <h1>To Do Application</h1>
        <form onSubmit={handleSubmit}>
          <label>Add Task: </label>
          <input
            type="text"
            name="task"
            placeholder="Enter Task"
            value={data.task}
            onChange={handleChange}
          />

          <br />
          <br />

          <label>Status: </label>
          <input
            type="checkbox"
            name="status"
            checked={data.status}
            onChange={handleChange}
          />

          <br />
          <br />

          <button type="submit">Submit</button>
        </form>

        {array.map((ele, index) => (
          <UI {...ele} key={index} />
        ))}
      </div>
    </>
  );
}

export default App;
