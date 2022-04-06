import React, { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import Axios  from 'axios';



function Campsform() {
    const [succ, setSucc]=useState(false);
    const Result = () => {
        return (
          <p>Camp Registered Successfuly.</p>
        )
      }
  const [details, setdetails] = useState({
    Camp_name: "",
    Location: "",
    Capacity: "",
    Max_employee: ""

  })

   function Handlechange (e){
    const name = e.target.name;
    const value = e.target.value;
    setdetails (prev => (
        {...prev, [name]: value}
    ))
   }
  

   const url =  "http://localhost:3001";
function handleClick1 (){
    // setSucc(!succ)

   // post request

   Axios.post (`${url}/camps`, {
      name : details.Camp_name,
     location : details.Location,
     max_refugees : details.Capacity,
     max_employee : details.Max_employee,
})
}   
   function Handlesubmit (event){
  //   event.preventDefault();
    setSucc (true)
    event.target.reset();
   
   }
  return (
    <div>
      <div className="maincontainer">
         
         
         <div class="container">
 
               <div class="card bg-light">
               <article class="card-body mx-auto" style={{maxWidth: "500px"}}>
                   <h4 class="card-title mt-3 text-center">Register A Camp</h4>
                  
                  
                   <p class="divider-text">
                       <span class="bg-light">-</span>
                   </p>
                 

                   <form onSubmit={Handlesubmit}>

                         {/* camp  name */}

                   <div class="form-group input-group">
                       <div class="input-group-prepend">
                           <span class="input-group-text"> <i class="fa fa-user"></i> </span>
                       </div>
                       <input name="" class="form-control" placeholder="Camp name" type="text"
                         Name="Camp_name"
                         value={details.Camp_name}
                         onChange={Handlechange}
                        />
                   </div> 
                       
                       {/* location */}

                   <div class="form-group input-group">
                       <div class="input-group-prepend">
                           <span class="input-group-text"><i class="fa-solid fa-location-pin"></i> </span>
                       </div>
                       <input name="" class="form-control" placeholder="Location" type="text"
                         Name="Location"
                         value={details.Location}
                         onChange={Handlechange}
                        />
                   </div> 

                    {/* Refugee capacity*/}

                   <div class="form-group input-group">
                       <div class="input-group-prepend">
                           <span class="input-group-text"> <i class="fa fa-envelope"></i> </span>
                       </div>
                       <input name="" class="form-control" placeholder="Refugee Capacity It can hold" type="number" 
                         Name="Capacity"
                         value={details.Capacity}
                         onChange={Handlechange}
                       />
                   </div>
                       
                       {/* Max employee */}
                   
                   <div class="form-group input-group">
                       <div class="input-group-prepend">
                           <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
                       </div>
                       <input class="form-control" placeholder="Maximum Employees Needed" type="number" 
                         Name="Max_employee"
                         value={details.Max_employee}
                         onChange={Handlechange}
                       />
                   </div> 
                  


                   <div class="form-group">
                       {succ ? <Result/> : ""}
                       <button type="submit" class="btn btn-primary btn-block" onClick={handleClick1}> Register  </button>
                   </div>     


                                                                                   
               </form>
               </article>
               </div> 
               
               </div> 
            
       </div>
    </div>
  )
}

export default Campsform;