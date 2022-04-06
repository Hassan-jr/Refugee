import React from 'react'
import './Refquerry.css'
function Refquerry(prop) {

  return (
      
         
    <div className='refugeecard-container'>

      {/* refugee */}
    <div >
    <h5> 
        <span className='field-title campname'>  Name: </span>
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

{/* camps */}
    <div >
    <h5> 
        <span className='field-title campname'>CAMP  Name: </span>
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

     
    </div>
    
  )
}

export default Refquerry