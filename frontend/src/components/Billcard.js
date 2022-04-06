import React from 'react'
import { useNavigate } from 'react-router-dom';

function Billcard(prop) {

  let navigate = useNavigate();
  function handleClick (){
   
    navigate('/governq')
  }


  return (
    <div className='refugeecard-container' onClick={handleClick}>
        <h5> 
         <span className='field-title'>  Government Body: </span>
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
  )
}

export default Billcard