import React, { useContext, useEffect, useState } from 'react'
import Ngoquerrycard from './Ngoquerrycard'
import  Axios from 'axios';
import { useurl } from '../store';

function Ngoquerry() {

  const url =  useContext(useurl());
    const [data, setdata] = useState ([]);
  
   

  useEffect(()=>{
    // let isMounted = true;
   
    Axios.get (`${url}/ngoq`)
    .then(res=>{
    
       setdata(res.data) 
      
    })
    
    // return (()=>{
    //   isMounted = false
    // })
      },[])





  return (
    <div>

        <div className='cards2'>
       {data.map(one=> <Ngoquerrycard  key= {one.id} {...one}  />)}
        </div>
    

    </div>
  )
}

export default Ngoquerry