import React, { useEffect } from 'react'
import '../styles/list.css'
import { Link } from "react-router-dom";
import { useState } from 'react';

function List() {
  const [taskData, setTaskData] = useState([]);

  useEffect(()=>{
   fetch('http://localhost:3200/tasks')
    .then(res=>res.json())
    .then(data=>{console.log("Fetched data:", data);  setTaskData(data); })
    .catch(err=>console.log(err));
  },[]);

  const handleDeleteItem=async(id)=>{
    await fetch('http://localhost:3200/tasks/'+id, {method:'DELETE'});
    setTaskData(taskData.filter(tasks=>tasks._id!=id));
  }
  
  return (
    <div className='list-container'>
        <h2>List</h2>
        <ul className='task-list'>
            <li className='list-header'>SNo</li>
            <li className='list-header'>Title</li>
            <li className='list-header'>Description</li>
            <li className='list-header'>Action</li>
            
            {/* Render dynamic tasks */}
            {taskData.map((task, index) => (
              <React.Fragment key={task._id}>
                <li className='list-item'>{index + 1}</li>
                <li className='list-item'>{task.title}</li>
                <li className='list-item'>{task.description}</li>
                <li>
                  <button className='delete-item' onClick={()=>handleDeleteItem(task._id)}>Delete</button>
                  <Link to={`/update/${task._id}`} className="update-item">Update</Link>
                </li>
              </React.Fragment>
            ))}


            {/* <li className='list-item'>1</li>
            <li className='list-item'>Meeting</li>
            <li className='list-item'>Lorem ipsum dolorate nihil, udantium natus accusantium.</li>
            <li><button className='delete-item'>Delete</button>
            <Link to={"/"} className="update-item">Update</Link></li>

            <li className='list-item'>2</li>
            <li className='list-item'>Meeting</li>
            <li className='list-item'>Lorem ipsum dolorate nihil, udantium natus accusantium.</li>
            <li><button className='delete-item'>Delete</button>
            <Link to={"/"} className="update-item">Update</Link></li> */}
        </ul>
    </div>

  )
}

export default List
