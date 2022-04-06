import React, { createContext, useEffect, useState} from 'react'
import Axios from "axios"

const Campscontext = createContext(); // camps
const Ngocontext = createContext() ; // ngo
const Urlcontext= createContext() ; // url


 
// camp
export function usecamps(){

    return (Campscontext)
    
}

// ngo

export function usengo(){

    return (Ngocontext)
    
}

// url
export function useurl(){

  return (Urlcontext)
  
}

// main function

export function Kampsprovider({children})
{
  

  const url = "http://localhost:3001";

  
    // camps
  const [campslist, setcampslist] = useState([])
  
 

//

useEffect(()=>{
  // let isMounted = true;
 
  Axios.get( `${url}/camps`)
    
  .then (response=>{
    
  setcampslist(response.data)
   
  })
  .catch (err=>{
    console.log(err);
  
  // return (()=>{
  //   isMounted = false
  // })
    },[])


 
},[])

// ngo
const [ngoslist, setngoslist] = useState([])


useEffect(()=> {
Axios.get( `${url}/ngo`)
.then ((response)=>{

  setngoslist(response.data)
 
})
.catch (err=>{
  console.log(err);
})

},[])





    return(
      <Campscontext.Provider   value={campslist}  >
        <Urlcontext.Provider value={url}>
            <Ngocontext.Provider value={ngoslist}>

            {children}

            </Ngocontext.Provider>
            </Urlcontext.Provider>
        </Campscontext.Provider>
    )
}