import React, { useState } from "react";

function StudentForm() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [students, setStudents] = useState([]);

  const addStudent = () => {
    if (name && course) {
      setStudents([...students, { name, course }]);
      setName("");
      setCourse("");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Student Registration</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />

      <button onClick={addStudent}>Add Student</button>

      <h3>Student List</h3>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student.name} - {student.course}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentForm;