import Axios  from 'axios';
import React, { useState ,  useEffect, useContext } from 'react'
import { useurl } from '../store';
import Empquerrycard from './Empquerrycard'




function Empquerry() {
 
  const url =  useContext(useurl());
  const [data, setdata] = useState ([]);


useEffect(()=>{
  // let isMounted = true;
  Axios.get (`${url}/emplooyeeq`)
  .then(res=>{
  
     setdata(res.data) 
  }
  )
  // return (()=>{
  //   isMounted = false
  // })
    },[])




  return (
    <div >
        <h1>Employees Querry Cards</h1>
         <div className='cards' >
         {data.map((one,index)=> <Empquerrycard  key= {index} {...one} />)}
         </div>
        
      

    </div>
  )
}

export default Empquerry