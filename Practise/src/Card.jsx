import React from "react";

function Cards() {
  const users = [
    { id: 1, name: "Prince", role: "Developer" },
    { id: 2, name: "Rahul", role: "Designer" },
    { id: 3, name: "Aman", role: "Tester" },
    { id: 4, name: "Vikas", role: "Manager" }
  ];

  return (
    <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
      {users.map((user) => (
        <div
          key={user.id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            width: "180px",
            borderRadius: "8px"
          }}
        >
          <h3>{user.name}</h3>
          <p>{user.role}</p>
          <button>View Profile</button>
        </div>
      ))}
    </div>
  );
}

export default Cards;