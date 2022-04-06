import  Axios  from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import Employeecard from '../components/Employeecard'
import Employeeform from '../components/Employeeform'
import { useurl } from '../store';

function Employees() {
const [employeeslist, setemployeelist] = useState([]);

const url =  useContext(useurl());



useEffect(()=>{
  // let isMounted = true;
  Axios.get (`${url}/employees`)
  .then((res)=>{
    setemployeelist(res.data)
  })
  
  // return (()=>{
  //   isMounted = false
  // })
    },[])



  return (
    <div>
      <h1>Employees </h1>
      <div className='cards'>
        {employeeslist.map((employee,index)=>
         <Employeecard  key= {index} {...employee}/>
        )}
      </div>
      
     <Employeeform/>
    </div>
  )
}

export default Employees