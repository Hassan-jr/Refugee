import React from 'react'
import {useNavigate} from "react-router-dom"
function Employeecard(prop) {


  const navigate = useNavigate()
  function handleclick(){
   navigate('/emplooyeeq')
  }
  



  return (
    <div className='refugeecard-container' onClick={handleclick}>
        <h5> 
         <span className='field-title'>  Name: </span>
          <span>{prop.f_name} </span>
          <span>{prop.l_name}</span>
        </h5>

       <h6>
       <span className='field-title'>Gender:</span>
       <span>{prop.gender} </span>
       </h6>

       <h6>
       <span className='field-title'>Job Title:</span>
       <span>{prop.job_title}</span>
       </h6>

      <h6>
          <span className='field-title'>ID:  </span>
          <span>{prop.id}</span>
      </h6>
    </div>
  )
}

export default Employeecard