import { useState } from 'react'
// import './App.css'
import MyNavbar from './components/MyNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTask from './components/AddTask';
import List from './components/List.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <MyNavbar/><br /><br />
        <Routes>
          <Route path="/list" element={<List/>} />
          <Route path="/add" element={<AddTask/>} />
          {/* <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/update" element={<UpdateTask/>} /> */}
      </Routes>
        
      </div>
    </>
  )
}

export default App
