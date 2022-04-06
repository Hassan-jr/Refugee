import  Axios from 'axios';
import React, {  useContext, useEffect, useState } from 'react'
import { useurl } from '../store';
import Refquerry from './Refquerry';


function Refugeeq() {

  
  const url =  useContext(useurl());
  const [data, setdata] = useState ([]);

  useEffect(()=>{
    // let isMounted = true;
    
    Axios.get (`${url}/refq`)
    .then(res=>{
    
       setdata(res.data) 
      
      
    })
    
    // return (()=>{
    //   isMounted = false
    // })
      },[])




  return (
    <div>
       
       <h1>Detailed Refugees Cards</h1>
      <div className='cards2'>
       {data.map((onecard, index)=>
         <Refquerry  key= {index} {...onecard} />
       )}

</div>
    </div>
  )
}

export default Refugeeq