import React from 'react'
import {Link } from 'react-router-dom'

import "./Nav.css"
function Nav() {

   var user = JSON.parse(localStorage.getItem('user'))
   var islog;
   if (user)
   {
     islog = user.islog;

   }
   
    
   if  (!user){ 
        islog = false;
   }

    function handlelogout (e){
        
        localStorage.removeItem('user')
        window.location.reload();
    }



  return (
    <div className='Nav-container'>
        <Link to = "/" style={{ textDecoration: 'none' }} >
            <p>Home</p>
          
        </Link>
        <Link to = "/camps" style={{ textDecoration: 'none' }}>
            <p>camps</p>
        </Link>
        <Link to = "/employees" style={{ textDecoration: 'none' }}>
            <p>Employees</p>
        </Link>
        <Link to = "/ngos" style={{ textDecoration: 'none' }}>
            <p>Ngo's</p>
        </Link>
        <Link to = "/govern" style={{ textDecoration: 'none' }}>
            <p>Government Bill</p>
        </Link>
        {islog ? 
          <div className='logdiv'>
          <h4 className='username'>{user.message}</h4>
          <button className='logout' onSubmit={handlelogout} onClick={handlelogout}>LOG OUT</button>
      </div>
      :
      <Link to = "/singup" style={{ textDecoration: 'none' }}>
      <p>Login/Singup</p>
  </Link>
            
    }
       
      
    </div>
  )
}

export default Nav