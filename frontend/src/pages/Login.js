import React, {  useContext, useState } from 'react'
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link,  useNavigate} from 'react-router-dom';
import Axios  from 'axios';
import { useurl } from '../store';


function Login() {

    const [data, setdata] = useState ({
      islog: null, 
      message: null
    });

    const [details, setdetails] = useState({
        Full_name: "",
        email:  "",
        password: "",
        repeat_password: "",
    })

    // loging in user 
    // context hook

    // const [notlogedin, setnotlogedin] = useState (false)
     
   
   const url =  useContext(useurl());
   
    function handleClick () {
        // post request
      Axios.post (`${url}/login`, {

        email : details.email,
      password:  details.password,
   }
   )
   .then((res)=>{
      // setdata(res.data) 
      setdata (prev => (
        {...prev, islog: res.data.islog , message: res.data.message}
      ))
       
      localStorage.setItem ('user', JSON.stringify(res.data))
     // localStorage.removeItem('user')
    // get user
    //user = JSON.parse(localStorage.getItem('user'))
     
   })
   .catch (err=>{
     console.log(err);
   })
  
  
}
  



     function Handlechange (e){
      const name = e.target.name;
      const value = e.target.value;
      setdetails (prev => (
          {...prev, [name]: value}
      ))
     }


     let navigate = useNavigate();
     // logincheck
     

     function Handlesubmit (event){
         
     event.preventDefault();
      
      if (data.islog)
      {
        
        navigate('/')
        window.location.reload();
      }
      
      // else {
      //   setnotlogedin (true)
      // }
     
     }

  return (
    <div>
      <div className="maincontainer">
         
         
         <div class="container">
 
               <div class="card bg-light">
               <article class="card-body mx-auto" style={{maxWidth: "400px"}}>
                   <h4 class="card-title mt-3 text-center">Login With Your Account</h4>
                   <p class="text-center">Get started with your account</p>
                  
                   <p class="divider-text">
                       <span class="bg-light">.</span>
                   </p>


                   <form onSubmit={Handlesubmit}>
                   


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
                       <input class="form-control" placeholder="Enter password" type="password"
                        Name="password"
                        value={details.password}
                        onChange={Handlechange}
                       />
                   </div> 

                 {/* {!notlogedin  ? <h6>Wrong Password Or Email</h6> : null} */}
                   

                   <div class="form-group">
                       <button type="submit" class="btn btn-primary btn-block" onClick={handleClick}> Login  </button>
                   </div>     

                   
                   <p class="text-center">New here? <Link to='/singup'>Create  new account</Link> </p>                                                                 
               </form>
               </article>
               </div> 
               
               </div> 
            
       </div>
    </div>
  )
}


export default Login