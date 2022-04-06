import React, { useContext, useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { usecamps } from '../store';
import Axios  from 'axios';



function Refugeeform() {

// camps

const campslist = useContext(usecamps()) 

    const [succ, setSucc]=useState(false);
    const Result = () => {
        return (
          <p>Refugee Registered Successfuly.</p>
        )
      }
  const [details, setdetails] = useState({
    First_name: "",
    Last_name: "",
    Gender: "",
    Age: "",
    camp: ""

  })

   function Handlechange (e){
    const name = e.target.name;
    const value = e.target.value;
    setdetails (prev => (
        {...prev, [name]: value}
    ))
   }
   
   const url =  "http://localhost:3001";

function handleClick (){
    // setSucc(!succ)

    // post reques

    Axios.post (`${url}/refugees`, {
     f_name : details.First_name,
     l_name : details.Last_name,
     gender : details.Gender,
     age : details.Age,
     camp : details.camp,
})
}   

   function Handlesubmit (event){
     event.preventDefault();
    setSucc (true)
    event.target.reset();
   
   }

  return (
    <div>
      <div className="maincontainer">
         
         
         <div class="container">
 
               <div class="card bg-light">
               <article class="card-body mx-auto" style={{maxWidth: "500px"}}>
                   <h4 class="card-title mt-3 text-center">Register A Refugee</h4>
                  
                  
                   <p class="divider-text">
                       <span class="bg-light">-</span>
                   </p>
                 

                   <form onSubmit={Handlesubmit}>

                         {/* first  name */}

                   <div class="form-group input-group">
                       <div class="input-group-prepend">
                           <span class="input-group-text"> <i class="fa fa-user"></i> </span>
                       </div>
                       <input name="" class="form-control" placeholder="First name" type="text"
                         Name="First_name"
                         value={details.First_name}
                         onChange={Handlechange}
                        />
                   </div> 
                       
                       {/* last name */}

                   <div class="form-group input-group">
                       <div class="input-group-prepend">
                           <span class="input-group-text"> <i class="fa fa-user"></i> </span>
                       </div>
                       <input name="" class="form-control" placeholder="Last name" type="text"
                         Name="Last_name"
                         value={details.Last_name}
                         onChange={Handlechange}
                        />
                   </div> 

                    {/* gender */}

                   <div class="form-group input-group">
                       <div class="input-group-prepend">
                           <span class="input-group-text"> <i class="fa fa-envelope"></i> </span>
                       </div>
                       <input name="" class="form-control" placeholder="Gender" type="text" 
                         Name="Gender"
                         value={details.Gender}
                         onChange={Handlechange}
                       />
                   </div>
                       
                       {/* Age */}
                   
                   <div class="form-group input-group">
                       <div class="input-group-prepend">
                           <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
                       </div>
                       <input class="form-control" placeholder="Age" type="number" 
                         Name="Age"
                         value={details.Age}
                         onChange={Handlechange}
                       />
                   </div> 
                   
                   {/* camp */}

                   <div class="form-group input-group">
                       <div class="input-group-prepend">
                           {/* <span class="input-group-text"> <i class="fa fa-lock"></i> </span> */}
                           <label><h6>camp name</h6></label>
                       </div>
                       <select class="form-control" 
                         Name="camp"
                         value={details.camp}
                         onChange={Handlechange}
                        >
                          {campslist.map((camp , index)=>
                          <option value={camp.id} key={index} >{camp.name}</option>
                          )}
                        </select>

                   </div>  

                  


                   <div class="form-group">
                       {succ ? <Result/> : ""}
                       <button type="submit" class="btn btn-primary btn-block" onClick={handleClick}> Register  </button>
                   </div>     


                                                                                   
               </form>
               </article>
               </div> 
               
               </div> 
            
       </div>
    </div>
  )
}

export default Refugeeform