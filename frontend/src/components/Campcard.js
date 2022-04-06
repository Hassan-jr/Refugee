import React from 'react'

import "./Campcard.css"

function Campcard(prop) {




  return (
    <div className='refugeecard-container' >
      
     <h5> 
        <span className='field-title'>  Name: </span>
        <span>{prop.name} </span>
     </h5>
     
       <h6>
       <span className='field-title'>Location:</span>
       <span> {prop.location}  </span>
       </h6>

       <h6>
       <span className='field-title'>Num of Refugees:</span>
       <span>{prop.max_refugees}</span>
       </h6>

      <h6>
          <span className='field-title'>Num of Employees :  </span>
          <span>{prop.max_employee}</span>
      </h6>


    </div>
  )
}

export default Campcard