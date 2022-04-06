import React, { useContext, useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { usecamps, usengo } from '../store';
import Axios  from 'axios';


function Employeeform() {

    // camps
    const campslist = useContext(usecamps()) 
    const ngolist = useContext (usengo())


    const [succ, setSucc]=useState(false);
    const Result = () => {
        return (
          <p>Employee Registered Successfuly.</p>
        )
      }
  const [details, setdetails] = useState({
    First_name: "",
    Last_name: "",
    Gender: "",
    Job_title: "",
    camp: "",
    Ngo:""

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

     Axios.post (`${url}/employee`, {
      f_name : details.First_name,
      l_name : details.Last_name,
      gender : details.Gender,
      job_title : details.Job_title,
      camp : details.camp,
      ngo: details.Ngo,
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
                   <h4 class="card-title mt-3 text-center">Register An Employee</h4>
                  
                  
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
                       <input class="form-control" placeholder="Job Title" type="Text" 
                         Name="Job_title"
                         value={details.Job_title}
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
                          {campslist.map((camp)=>
                          <option value={camp.id}>{camp.name}</option>
                          )}
                        </select>

                   </div>  

                   {/* Ngo */}

                   <div class="form-group input-group">
                       <div class="input-group-prepend">
                           {/* <span class="input-group-text"> <i class="fa fa-lock"></i> </span> */}
                           <label><h6>Ngo Name</h6></label>
                       </div>
                       <select class="form-control" 
                         Name="Ngo"
                         value={details.Ngo}
                         onChange={Handlechange}
                        >
                          {ngolist.map((ngo, index)=>
                          <option value={ngo.id} key={index}  >{ngo.Name}</option>
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

export default Employeeform