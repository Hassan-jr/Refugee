import React, { useContext} from 'react'
import Campcard from '../components/Campcard'
import Campsform from '../components/Campsform'

import { usecamps } from '../store'



function Camps() {
 

const campslist = useContext(usecamps()) 



  return (
    <div>
      <h1>Camps</h1>
      <div className='cards'>
        {campslist.map((camp)=>
          <Campcard key= {camp.id} {...camp } />
        )}

        
      </div>

   <Campsform/>
    </div>
  )
}


export default Camps 