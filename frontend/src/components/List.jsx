import React, { useEffect } from 'react'
import '../styles/list.css'
import { Link } from "react-router-dom";
import { useState } from 'react';

function List() {
  const [taskData, setTaskData] = useState();
  // useEffect(()=>[
  //   getListData()
  // ],[])
  // const getListData = async()=>{
  //   let list=await fetch("");
  //   list=await list.json();
  //   if(list.success){
  //     setTaskData(list.result);
  //   }
  //   console.log(list);
  // }
  return (
    <div className='list-container'>
        <h2>List</h2>
        <ul className='task-list'>
            <li className='list-header'>SNo</li>
            <li className='list-header'>Title</li>
            <li className='list-header'>Description</li>
            <li className='list-header'>Action</li>
            
            <li className='list-item'>1</li>
            <li className='list-item'>Meeting</li>
            <li className='list-item'>Lorem ipsum dolorate nihil, udantium natus accusantium.</li>
            <li><button className='delete-item'>Delete</button>
            <Link to={"/"} className="update-item">Update</Link></li>

            <li className='list-item'>2</li>
            <li className='list-item'>Meeting</li>
            <li className='list-item'>Lorem ipsum dolorate nihil, udantium natus accusantium.</li>
            <li><button className='delete-item'>Delete</button>
            <Link to={"/"} className="update-item">Update</Link></li>
        </ul>
    </div>

  )
}

export default List
