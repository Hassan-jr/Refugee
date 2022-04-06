import React, { useContext, useEffect, useState } from 'react'
import Refugeecard from '../components/Refugeecard'
import Refugeeform from '../components/Refugeeform'
import Headingimg from "../images/Head.jpg"
import "./Home.css"
import Axios from "axios"
import {useurl} from "../store"



function Home() {


    const url =  useContext(useurl());

const  [refugeelist , setrefugeelist] = useState([]);


//
useEffect(()=>{
  // let isMounted = true;
 
  Axios.get(`${url}/refugees `)
  .then((respons)=>{
    setrefugeelist(respons.data)
  })
  
  // return (()=>{
  //   isMounted = false
  // })
    },[])





  return (
    <div>
      <div className='Headimg'> 
      <div className='heading_details'>
          <h1>Refugees Database Project</h1>
        
          <h3>Project DETAILS</h3>
          <p>The government would like to register all refugees in the country with the aim of
protecting, assisting and documenting them. The refugees are based at the many camps
spread across the country. A record is required on all employee of the various NGOs
offering different services at the refugee camps. The government allocates funds for
refugees whose expenditure must be recorded and monitored at the various camps. </p>
</div>
          <img className='headingpic' src={Headingimg} alt="" />
      </div>

      <div className='cards'>
        {refugeelist.map((refugee)=>
          <Refugeecard  key= {refugee.id} {...refugee}  />
        )}
      
      </div>
     


      {/* form */}
      <Refugeeform/>
    </div>

  )
}

export default Home