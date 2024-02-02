import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import MyProject from '../components/MyProject'
import Profile from '../components/Profile'
function Dashboard() {
  const [user,setUser]=useState("")
  useEffect(()=>{
    if(sessionStorage.getItem("username")){
      setUser(sessionStorage.getItem("username"))
    }else{
      setUser("")
    }
  },[])
  return (
    <>
    <Header insideDashBoard></Header>
      <div style={{marginTop:'100px'}} className='container'>
        <h1>Welcome <span className='text-warning'>{user?.split(" ")[0]}</span></h1>
        <div className="row">
          <div className="col-lg-8">
          <MyProject></MyProject>
          </div>
          <div className="col-lg-4">
          <Profile></Profile>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard