import React from 'react';
import '../styles/AddTask.css';

function AddTask() {
  return (
    <div className="add-task">
      <h2><b><center>Add New Task</center></b></h2>

      <form>
        <label htmlFor="task-title">Title</label>
        <input type="text" id="task-title" placeholder="Your task..."/>

        <label htmlFor="task-desc">Description</label>
        <textarea id="task-desc" rows="4" placeholder="Details..."></textarea>

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default AddTask;
