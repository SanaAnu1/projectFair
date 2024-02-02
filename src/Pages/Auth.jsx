import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Bi from '../assets/secure-2.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAPI, registerAPI } from '../services/allAPI';
import Spinner from 'react-bootstrap/Spinner';

function Auth({insideRegister}) {
  const [loginStatus,setloginStatus]=useState(false)
  const navigate=useNavigate()
  // console.log(insideRegister);
   const [userInputData,setUserInputData]=useState({
    username:"",email:"",password:""
   })
   const handleRegister=async(e)=>{
    e.preventDefault()
    const {username,email,password}=userInputData
if(!username||!email||!password){
toast.info("please fill the form completely")
}else{
  try {
    const result=await registerAPI(userInputData)
console.log(result);
if(result.status===200){
  toast.success(`Welcome ${result.data.username}.. please login to explore our site!!`)
  setUserInputData({username:"",email:"",password:""})
  //navigate to login
  setTimeout(()=>{  navigate("/login")
},2000)
}else{
  toast.warning(result.response.data)
}
  } catch (error) {
    console.log(error);
  }
}
   }
const handleLogin=async(e)=>{
  e.preventDefault()
  const {email,password}=userInputData
  if(!email||!password){
    toast.info("please fill the form completely")
  }else{
    try {
      const result=await loginAPI({email,password})
  console.log(result);
  if(result.status===200){
    //store token,username
    sessionStorage.setItem("username",result.data.existingUser.username)
    sessionStorage.setItem("token",result.data.token)
    setloginStatus(true)
    setTimeout(()=>{  
      setUserInputData({email:"",password:""})
      //navigate to landing page
      navigate("/")
  },2000)  
}else{
    toast.warning(result.response.data)
  }
    } catch (error) {
      console.log(error);
    }
  }
     }
  

  return (
    <div style={{width:"100%", height:'100vh'}} className='d-flex justify-content-center align-items-center'>
      <div className='container w-75' style={{textTransform:' none'}}>
        <Link to={'/'} style={{textTransform:' none'}}><i className='fa-solid fa-arrow-left' style={{textTransform:' none'}}><span className='ms-2'style={{textTransform:' none'}} >Back To Home</span></i></Link>
        <div className='card shadow p-5' id='di'>
            <div className='row align-items-center'> 
                <div className="col-lg-6">
                  <img height={'100%'} width={'100%'} src={Bi} alt="" />
                </div>
                <div className="col-lg-6">
                  <h1 className='fw-bolder text-light mt-2'>
                      <i style={{height:'41px'}} className='fa-solid fa-hands-holding-circle'></i>Project Fair
                  </h1>
                  <h5>
                    Sign{insideRegister?'Up':'In'} to your account
                  </h5>
                  <Form>
                    {
                      insideRegister&&
                      <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Control type="text" placeholder="Enter Name" value={userInputData.username} onChange={(e)=>setUserInputData({...userInputData,username:e.target.value})}/>
                        </Form.Group>
                    }

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" value={userInputData.email} onChange={(e)=>setUserInputData({...userInputData,email:e.target.value})} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" value={userInputData.password} onChange={(e)=>setUserInputData({...userInputData,password:e.target.value})}/>
                        </Form.Group>
                    {
                      insideRegister?
                      <div>
                          <button onClick={handleRegister} className='btn btn-light mb-2' style={{textTransform:' none'}}>Register</button>
                          <p>Already have account? Click here to <Link to={'/login'} className='text-light'>Login </Link> </p>
                      </div>  :
                      <div>
                        <button onClick={handleLogin} className='btn btn-light mb-2' style={{textTransform:' none'}}>Login { loginStatus &&<Spinner animation="border" variant="warning" />}</button>
                          <p>New User? Click here to <Link to={'/register'} className='text-light' >Register</Link> </p>
                      
                      </div>
                    }
                  </Form>
                </div>
            </div>
        </div>
      </div>
      <ToastContainer autoClose={3000} theme='colored'/>
    </div>
  )
}

export default Auth