import React, { useState } from "react";

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Prince", age: 20 },
    { id: 2, name: "Rahul", age: 22 },
    { id: 3, name: "Amit", age: 21 }
  ]);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const addUser = () => {
    if (!name || !age) return;

    const newUser = {
      id: Date.now(),
      name,
      age
    };

    setUsers([...users, newUser]);
    setName("");
    setAge("");
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Management System</h1>

      <div>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <button onClick={addUser}>
          Add User
        </button>
      </div>

      <hr />

      <h2>User List</h2>

      {users.length === 0 ? (
        <p>No Users Found</p>
      ) : (
        <div>
          {users.map((user) => (
            <div
              key={user.id}
              style={{
                border: "1px solid gray",
                margin: "10px 0",
                padding: "10px",
                borderRadius: "5px"
              }}
            >
              <h3>{user.name}</h3>

              <p>
                Age: {user.age}
              </p>

              <button
                onClick={() => deleteUser(user.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}

      <footer>
        <h4>React JSX Example</h4>
        <p>Using useState Hook</p>
      </footer>
    </div>
  );
}

export default App;