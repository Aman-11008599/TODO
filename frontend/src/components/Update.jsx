import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import '../styles/AddTask.css';

function Update() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    // 1️⃣ Load existing task details
    useEffect(() => {
        fetch("http://localhost:3200/tasks/" + id)
        .then(res => res.json())
        .then(data => {
            setTitle(data.title);
            setDescription(data.description);
        })
    }, [id]);

    // 2️⃣ Submit updated data
    const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedTask = { title, description };

    const res = await fetch("http://localhost:3200/update/" + id, {
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedTask),
    });

    alert("Task Updated Successfully.");

    navigate("/"); // go back to list
    
  };

  return (
    <div className="add-task">
      <h2><b><center>Add New Task</center></b></h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="task-title">Title</label>
        <input type="text" id="task-title" placeholder="Your task..." value={title} onChange={(e) => setTitle(e.target.value)}/>

        <label htmlFor="task-desc">Description</label>
        <textarea id="task-desc" rows="4" placeholder="Details..." value={description} onChange={(e) => setDescription(e.target.value)}></textarea>

        <button type="submit">Add Task</button>
      </form>
    </div>
  )
}

export default Update
