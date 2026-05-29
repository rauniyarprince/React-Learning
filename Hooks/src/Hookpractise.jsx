import React, { useState, useEffect, useMemo, useCallback } from "react";

const usersData = [
  { id: 1, name: "Prince", age: 20, city: "Lucknow" },
  { id: 2, name: "Rahul", age: 24, city: "Delhi" },
  { id: 3, name: "Aman", age: 19, city: "Mumbai" },
  { id: 4, name: "Sneha", age: 22, city: "Pune" },
];

function UserCard({ user, removeUser }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "10px",
      }}
    >
      <h3>{user.name}</h3>
      <p>Age: {user.age}</p>
      <p>City: {user.city}</p>

      <button onClick={() => removeUser(user.id)}>
        Delete
      </button>
    </div>
  );
}

export default function App() {
  const [users, setUsers] = useState(usersData);
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component Updated");
  }, [users, darkMode]);

  const removeUser = useCallback((id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  }, []);

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, users]);

  const appStyle = {
    background: darkMode ? "#111" : "#f4f4f4",
    color: darkMode ? "#fff" : "#000",
    minHeight: "100vh",
    padding: "20px",
    transition: "0.3s",
  };

  return (
    <div style={appStyle}>
      <h1>Advanced JSX Example</h1>

      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <button
        onClick={() => setCount(count + 1)}
        style={{ marginLeft: "10px" }}
      >
        Count: {count}
      </button>

      <br />
      <br />

      <input
        type="text"
        placeholder="Search User"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "250px",
          borderRadius: "5px",
        }}
      />

      <div style={{ marginTop: "20px" }}>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              removeUser={removeUser}
            />
          ))
        ) : (
          <h2>No User Found</h2>
        )}
      </div>
    </div>
  );
}