import React from 'react'

function Governmentquerrycard(prop) {
  return (
    <div  className='refugeecard-container'>
        {/* goverment */}
        <div>
        <h5> 
         <span className='field-title campname'>  Government Body: </span>
         <span>{prop.g_body}</span>
       </h5>

       <h6>
       <span className='field-title'>Revenue Allocatted:</span>
       <span>{prop.revenue} </span>
       </h6>

       <h6>
       <span className='field-title'>Expenditure:</span>
       <span>{prop.expenditure }</span>
       </h6>

       <h6>
       <span className='field-title'>Service Provided:</span>
       <span> {prop.service} </span>
       </h6>


      <h6>
          <span className='field-title'>Camp Id:  </span>
          <span> {prop.gcamp_id} </span>
      </h6>

        </div>
        {/* camps */}
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

export default Governmentquerrycard