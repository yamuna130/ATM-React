//import React from 'react'

//function AuthCheck(Component){

  //let authenticated=true;

  //return(props)=>{
    //if(authenticated){
    //  return <Component {...props}/>
    //}
    //else{
      //return<Login/>
    //}
  //}
  

  //}




//function User(props){
  //return (
   // <>
  //<h1 className='text-primary'>This is User Component.</h1>
  //<h2>Heelo {props.username}</h2>
  //</>
  //);
//}


//function Login(){
  //return <h1>Login Component</h1>
//}

//const AuthChecked = AuthCheck(User)

//function App(){

  //return(
    //<AuthChecked username={'john'} />
  //)
  
//}

//export default App


import Form from './form'
import Account from  "./account";
import React from 'react'

function App(){
  return(
    <>
    <Form/>
    <Account/>
    </>
  )
}
export default App

    
  
      

     
  