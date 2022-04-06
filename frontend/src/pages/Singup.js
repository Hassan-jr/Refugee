import React, {  useContext, useState } from 'react'
import './Singup.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import Axios from "axios"
import { useurl } from '../store';


function Singup() {
    const [succ, setSucc]=useState(false);
    const Result = () => {
        return (
          <p>Email Sent successfully. I will Contact You Soon.</p>
        )
      }
  const [details, setdetails] = useState({
      Full_name: "",
      email:  "",
      password: "",
      repeat_password: ""
  })

   function Handlechange (e){
    const name = e.target.name;
    const value = e.target.value;
    setdetails (prev => (
        {...prev, [name]: value}
    ))
   }

   // post request 
   const url =  useContext(useurl());
   const [data, setdata] = useState ();

function handleClick (){
    setSucc(false)

    // post request
   

//
// useEffect(()=>{
//   let isMounted = true;
 
  Axios.post (`${url}/signup`, {
     
    full_name: details.Full_name,
    email : details.email,
    password: details.password,
}
).then((res)=>{
    setdata(res.data)
   localStorage.setItem ('user', JSON.stringify(res.data))
  // localStorage.removeItem('user')
 // get user
 //user = JSON.parse(localStorage.getItem('user'))
  
})

  
  
//   return (()=>{
//     isMounted = false
//   })
//  },[])

}





let navigate = useNavigate();
   function Handlesubmit (event){
    //  event.preventDefault();
    setSucc (true)
    event.target.reset();

    if (data)
      {
        navigate('/')
        window.location.reload();
       
      }
   
   }
  return (
    <div>
      <div className="maincontainer">
         
         
         <div class="container">
 
               <div class="card bg-light">
               <article class="card-body mx-auto" style={{maxWidth: "500px"}}>
                   <h4 class="card-title mt-3 text-center">Create Account</h4>
                   <p class="text-center">Get started with your free account</p>
                  
                   <p class="divider-text">
                       <span class="bg-light">-</span>
                   </p>
                 

                   <form onSubmit={Handlesubmit}>
                   <div class="form-group input-group">
                       <div class="input-group-prepend">
                           <span class="input-group-text"> <i class="fa fa-user"></i> </span>
                       </div>
                       <input name="" class="form-control" placeholder="Full name" type="text"
                         Name="Full_name"
                         value={details.Full_name}
                         onChange={Handlechange}
                        />
                   </div> 


                   <div class="form-group input-group">
                       <div class="input-group-prepend">
                           <span class="input-group-text"> <i class="fa fa-envelope"></i> </span>
                       </div>
                       <input name="" class="form-control" placeholder="Email address" type="email" 
                         Name="email"
                         value={details.email}
                         onChange={Handlechange}
                       />
                   </div>
                  
                   
                   <div class="form-group input-group">
                       <div class="input-group-prepend">
                           <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
                       </div>
                       <input class="form-control" placeholder="Create password" type="password" 
                         Name="password"
                         value={details.password}
                         onChange={Handlechange}
                       />
                   </div> 


                   <div class="form-group input-group">
                       <div class="input-group-prepend">
                           <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
                       </div>
                       <input class="form-control" placeholder="Repeat password" type="password"
                         Name="repeat_password"
                         value={details.repeat_password}
                         onChange={Handlechange}
                        />
                   </div>  


                   <div class="form-group">
                       {succ ? <Result/> : ""}
                       <button type="submit" class="btn btn-primary btn-block" onClick={handleClick}> Create Account  </button>
                   </div>     


                   <p class="text-center">Have an account? <Link to='/login'>Log In</Link> </p>                                                                 
               </form>
               </article>
               </div> 
               
               </div> 
            
       </div>
    </div>
  )
}


export default Singup