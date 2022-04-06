import React, { useContext, useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { usecamps } from '../store';
import Axios  from 'axios';




function  Ngosform() {

  // camps
  const campslist = useContext(usecamps()) 

    const [succ, setSucc]=useState(false);
    const Result = () => {
        return (
          <p>Info Saved Successfuly.</p>
        )
      }
  const [details, setdetails] = useState({
    Name: "",
    Service: "",
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
    Axios.post (`${url}/ngo`, {
      name : details.Name,
     service : details.Service,
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
                   <h4 class="card-title mt-3 text-center">Ngo Form</h4>
                  
                  
                   <p class="divider-text">
                       <span class="bg-light">-</span>
                   </p>
                 

                   <form onSubmit={Handlesubmit}>

                         {/*  name */}

                   <div class="form-group input-group">
                       <div class="input-group-prepend">
                           <span class="input-group-text"> <i class="fa fa-user"></i> </span>
                       </div>
                       <input name="" class="form-control" placeholder="Name" type="text"
                         Name="Name"
                         value={details.Name}
                         onChange={Handlechange}
                        />
                   </div> 
                       
                       {/* service*/}

                   <div class="form-group input-group">
                       <div class="input-group-prepend">
                           <span class="input-group-text"> <i class="fa fa-user"></i> </span>
                       </div>
                       <input name="" class="form-control" placeholder="Service privided by the Ngo" type="text"
                         Name="Service"
                         value={details.Service}
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
                          {campslist.map((camp,index)=>
                          <option value={camp.id} key={index}  >{camp.name}</option>
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

export default Ngosform