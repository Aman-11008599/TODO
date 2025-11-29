import React from 'react';
import '../styles/AddTask.css';
import { useState } from 'react';

function AddTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault(); // prevent page reload
    const newTask = {title,description};

    try{
      const res = await fetch("http://localhost:3200/add-task",{
        method:'POST',
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(newTask)
      });

      const data = await res.json();
      console.log("--->",data);

      // Reset fields
      setTitle("");
      setDescription("");

      alert("New Task Added Successfully.");
    }catch(err){
      console.log('error: ',err);
    }
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
  );
}

export default AddTask;
