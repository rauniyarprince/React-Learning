import React, { useState } from "react";

function StudentManager() {
  const [students, setStudents] = useState([
    "Rahul",
    "Aman",
    "Priya"
  ]);

  const [name, setName] = useState("");

  const addStudent = () => {
    if (name.trim() !== "") {
      setStudents([...students, name]);
      setName("");
    }
  };

  return (
    <div>
      <h1>Student Manager</h1>

      <input
        type="text"
        placeholder="Enter student name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={addStudent}>
        Add Student
      </button>

      <h2>Student List</h2>

      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student}
          </li>
        ))}
      </ul>

      <p>Total Students: {students.length}</p>
    </div>
  );
}

export default StudentManager;