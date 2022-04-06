import React, { useContext } from 'react'
import Ngoscard from '../components/Ngoscard'
import Ngosform from '../components/Ngosform'
import { usengo } from '../store'

function Ngos() {


const ngoslist = useContext (usengo())


  return (
    <div>
     <h1>NGO's Center</h1>
     <div className='cards' >

       {ngoslist.map((ngo)=>
 < Ngoscard  key= {ngo.id} {...ngo}/>
      )}
     
     </div>
     <Ngosform/>

    </div>
  )
}

export default Ngos