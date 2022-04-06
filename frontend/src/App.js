import './App.css';
import {
  BrowserRouter as  Router,
  Routes,
  Route,
} from "react-router-dom";
import React from "react"
import Home from './pages/Home';
import Camps from './pages/Camps';
import Ngos from './pages/Ngos';
import Employees from './pages/Employees';
import Goven from './pages/Goven';
import Nav from './components/Nav';
import Login from './pages/Login'
import Singup from './pages/Singup'
import Refugeeq from './Querry/Refugeeq';
import { Kampsprovider } from './store';

import Empquerry from './Querry/Empquerry';
import Ngoquerry from './Querry/Ngoquerry';
import Governmentquerry from './Querry/Governmentquerry';



function App() {

  let date =  new Date().getFullYear();



  return (
    <Kampsprovider>
    <Router>
     
    <div className="App">
      <Nav/>
     

     {/* routes */}
     <Routes>
     
       <Route  path="/" element={<Home/>}/>
       <Route path ="/camps" element={<Camps/>}/>
       <Route path ="/ngos" element={<Ngos/>}/>
       <Route path ="/employees" element={<Employees/>}/>
       <Route path ="/govern" element={<Goven/>}/>
       <Route path ="/login" element={<Login/>}/>
       <Route path ="/singup" element={<Singup/>}/>
       <Route path ="/refugeeq" element={<Refugeeq/>}/>
       
       <Route path ="/emplooyeeq" element={<Empquerry/>}/>
       <Route path ="/ngoq" element={<Ngoquerry/>}/>
       <Route path ="/governq" element={<Governmentquerry/>}/>

     </Routes>


        {/* FOOTER */}
        <div className='footer'>
          <p> GROUP 37 PROJECT COPYRIGHT @{date}</p>
        </div>


    </div>
    
    </Router>
    </Kampsprovider>
   
  );
}

export default App;
 