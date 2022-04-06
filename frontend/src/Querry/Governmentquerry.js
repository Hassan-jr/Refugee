import Axios  from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useurl } from '../store';
import Governmentquerrycard from "./Governmentquerrycard"




function Governmentquerry() {
 
  const url =  useContext(useurl());
  const [data, setdata] = useState ([]);

 
useEffect(()=>{
  // let isMounted = true;
 
  Axios.get (`${url}/governq`)
  .then(res=>{
  
     setdata(res.data) 
  })
  

  // return (()=>{
  //   isMounted = false
  // })
    },[])



  return (
    <div >
        <h1>Government Bills Querry Cards</h1>
         <div className='cards' >
         {data.map(one=> <Governmentquerrycard  key= {one.id} {...one} />)}
         </div>
        
      

    </div>
  )
}

export default Governmentquerry