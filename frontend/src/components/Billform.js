import React, { useContext, useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { usecamps } from '../store';
import Axios  from 'axios';

function Billform() {

  //camps
  const campslist = useContext(usecamps()) 


    const [succ, setSucc]=useState(false);
    const Result = () => {
        return (
          <p>Info Saved Successfuly.</p>
        )
      }
  const [details, setdetails] = useState({
    G_body: "",
    Revenue: "",
    Expenditure:"",
    Services: "",
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
    // post request
    Axios.post (`${url}/bill`, {
    g_body: details.G_body,
    revenue: details.Revenue,
    expenditure: details.Expenditure,
    service: details.Services,
    camp: details.camp,

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
                   <h4 class="card-title mt-3 text-center">Government Bill Form</h4>
                  
                  
                   <p class="divider-text">
                       <span class="bg-light">-</span>
                   </p>
                 

                   <form onSubmit={Handlesubmit}>

                         {/* g body */}

                   <div class="form-group input-group">
                       <div class="input-group-prepend">
                           <span class="input-group-text"> <i class="fa fa-user"></i> </span>
                       </div>
                       <input name="" class="form-control" placeholder="Enter Government Body" type="text"
                         Name="G_body"
                         value={details.G_body}
                         onChange={Handlechange}
                        />
                   </div> 
                       
                       {/* Revenue */}

                   <div class="form-group input-group">
                       <div class="input-group-prepend">
                           <span class="input-group-text"> <i class="fa fa-user"></i> </span>
                       </div>
                       <input name="" class="form-control" placeholder="Revenue Allocatted" type="number"
                         Name="Revenue"
                         value={details.Revenue}
                         onChange={Handlechange}
                        />
                   </div> 

                    {/* Expenditure */}
                  
                    <div class="form-group input-group">
                       <div class="input-group-prepend">
                           <span class="input-group-text"> <i class="fa fa-user"></i> </span>
                       </div>
                       <input name="" class="form-control" placeholder="Expenditure" type="number"
                         Name="Expenditure"
                         value={details.Expenditure}
                         onChange={Handlechange}
                        />
                   </div> 

                    {/* sevices */}

                   <div class="form-group input-group">
                       <div class="input-group-prepend">
                           <span class="input-group-text"> <i class="fa fa-envelope"></i> </span>
                       </div>
                       <input name="" class="form-control" placeholder="Service Provided" type="text" 
                         Name="Services"
                         value={details.Services}
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

export default Billform