import React, { useEffect, useState } from 'react'
import Bimg from '../assets/OIP.png'
import { Link, useNavigate } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import { ToastContainer, toast } from 'react-toastify';


function Home() {
  const [loginStatus,setLoginStatus]=useState(false)
  const navigate=useNavigate()
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setLoginStatus(true)
    }else{
      setLoginStatus(false)
    }
  },[])
  const handleNavigate=()=>{
    if(loginStatus===true){
      navigate('/projects')
    }
    else{
      toast.warning("please login to get full access to projects!!")
    }
  }
  return (
    <>
      <div style={{height:'100vh',backgroundColor:'#7ccc7c'}} className='w-100 d-flex justify-content-center align-items-center rounded p-2'>
        <div className='container'>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h1 style={{fontSize:'80px'}} className='fw-bolder text-light mb-3 mt-5'>
                  <i style={{height:'85px'}} className='fa-solid fa-hands-holding-circle'></i>
                  Project Fair
                </h1>
                <p style={{textAlign:'justify'}}> 
                    One stop destination for all software development projects. Where user can add and manage their projects. As well as access all projects available in our website... what are you waiting for!!!
                </p>
                {loginStatus?<Link className='btn btn-warning mt-3' to={'/dashboard'} style={{textTransform:' none'}}>Manage your projects
                <i className='fa-solid fa-arrow-right'></i>
                </Link>:<Link className='btn btn-warning mt-3' to={'/login'} style={{textTransform:' none'}}>Starts To Explore
                <i className='fa-solid fa-arrow-right'></i>
                </Link>}
              </div>
              <div className="col-lg-1"></div>
              <div className="col-lg-4">
                <img width={'100%'} height={'400px'} src={Bimg} alt="" /></div>  
            </div>
        </div>
      </div>
      <div className='mt-5'>
        <h1 className='text-center' >Explore Our Project</h1>
        <marquee behavior="" direction="">
          <div className='d-flex justify-content-between'>
            <div className='project me-5'>
              <ProjectCard></ProjectCard>
            </div>
          </div>
        </marquee>
        <div className='text-center'>
              <button className='btn btn-link' onClick={handleNavigate} style={{textDecoration:'none',textTransform:' none'}}>View More Project</button>
            </div>
      </div>
      <ToastContainer autoClose={3000} theme='colored'/>

    </>
  )
}

export default Home