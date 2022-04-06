import React from 'react'

function Ngoquerrycard(prop) {
  return (
    <div className='refugeecard-container'>
        {/* ngo */}
       <div>

       <h5> 
        <span className='field-title  campname'>  Name: </span>
        <span> {prop.Name} </span>
         
     </h5>
       <h6>
       <span className='field-title'>Service  provided:</span>
       <span> {prop.service} </span>
       </h6>

      <h6>
          <span className='field-title'>Camp id:  </span>
          <span>{prop.campid}</span>
      </h6>

       </div>

       {/* camp */}
       <div>
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

export default Ngoquerrycard