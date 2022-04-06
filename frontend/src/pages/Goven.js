import React, { useContext, useEffect, useState } from 'react'
import Billcard from '../components/Billcard'
import Billform from '../components/Billform'
import Axios from "axios"
import { useurl } from '../store'

function Goven() {

  const [billlist, setbilllist] = useState([])
  const url =  useContext(useurl());



//
useEffect(()=>{
  // let isMounted = true;
 
  Axios.get( `${url}/government`)
  .then ((response)=>{
    setbilllist(response.data);
   
  })
  
  // return (()=>{
  //   isMounted = false
  // })
    },[])




  return (
    <div>
 <h1>Government Bill</h1>
 <div className='cards'>
   
{billlist.map((bill)=><Billcard  key= {bill.id} {...bill}/>)}

   
 </div>
   <Billform/>
    </div>
  )
}

export default Goven