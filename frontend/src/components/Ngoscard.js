import React from 'react'
import { useNavigate } from 'react-router-dom'

function Ngoscard(prop) {


  const navigate = useNavigate()
  function handleclick(){
   navigate('/ngoq')
  }


  return (
    <div className='refugeecard-container' onClick={handleclick} >
       <h5> 
        <span className='field-title'>  Name: </span>
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
  )
}

export default Ngoscard