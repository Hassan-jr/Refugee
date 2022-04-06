import React from 'react'
import { useNavigate } from 'react-router-dom';

import './Refugeecard.css'
var subid ;




function Refugeecard(prop) {

  let navigate = useNavigate();
  function handleClick (){
    subid = prop.id
    navigate('/refugeeq')
  }

  


  return (
    <div className='refugeecard-container' onClick={handleClick}>
     
     <h5> 
        <span className='field-title'>  Name: </span>
        <span>{prop.f_name} </span>
         <span>{prop.l_name}</span>
     </h5>
       <h6>
       <span className='field-title'>Gender:</span>
       <span>{prop.gender}</span>
       <span className='field-title'>Age:</span>
       <span>{prop.age}</span>
       </h6>
      <h6>
          <span className='field-title'>Refugee ID:  </span>
          <span>{prop.id}</span>
      </h6>

      

    </div>
  )
}
export function sumid (){
  return subid;
}

export default Refugeecard;