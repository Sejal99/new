

import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
// import Navbar from './components/Navbar'


function App() {

 

  return (
    <div style={{backgroundColor:"#FFF0F5", width:"100%" , height:"100vh"}}>


      <Routes>
      <Route path={"/"} element= {<Login />} />

      {/* <Route path={"/"} element= {<Navbar />} /> */}
   
        {/* <Route path={"/"} element= {<Dashboard />} /> */}
        

      </Routes>

 
    
      
    </div>
  )
}

export default App
