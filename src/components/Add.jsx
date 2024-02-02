import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import iu from '../assets/iu.jpg'
import { ToastContainer, toast } from 'react-toastify';

function Add() {
  const [projectData,setProjectData]=useState({
    title:"",languages:"",overview:"",github:"",website:"",projectImage:""
  })
  const [imageStatus,setImageStatus]=useState(false)
  const [preview,setPreview]=useState("")
  console.log(projectData);

  const [show,setShow]=useState(false)
  const handleShow=()=>setShow(true)
  const handleClose=()=>{
    setShow(false)
    setProjectData({title:"",languages:"",overview:"",github:"",website:"",projectImage:""})
    setPreview(iu)
  }
  const handleSave=()=>{
    const { title,languages,overview,github,website,projectImage}=projectData
if(!title||!languages||!overview||!github||!website||!projectImage){
toast.info("please fill the form completely")
}else{
  toast.info("ok")
  const reqBody=new FormData()
  reqBody.append("title",title)
  reqBody.append("languages",languages)
  reqBody.append("overview",overview)
  reqBody.append("github",github)
  reqBody.append("website",website)
  reqBody.append("projectImage",projectImage)

  const reqHeader={
    "Content-Type":"multipart/form-data"
  }
  console.log("proceed to api call");

}}
useEffect(()=>{
if(projectData.projectImage?.type=="image/png"||projectData.projectImage?.type=="image/jpeg"||projectData.projectImage?.type=="image/jpg"){
  setImageStatus(true)
  setPreview(URL.createObjectURL(projectData.projectImage))
}else{
  setPreview("")
  setProjectData({...projectData,projectImage:""})
  setImageStatus(false)
}
},[projectData.projectImage])
  return (
    <>
       <button onClick={handleShow} style={{textDecoration:'none'}} className='btn btn-link text-warning d-flex align-items-center fw-bolder ms-auto'><i style={{height:'34px'}} className='fa-solid fa-plus fa-2x me-2'></i>Add Project</button>
       <Modal
       size='lg'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className="row justify-content-center  align-items-center">
          <div className="col-lg-4 mb-3">
            <div className='w-100 d-flex flex-column justify-content-center  align-items-center'>
              <label >
                <input type="file" style={{display:'none'}} onChange={e=>setProjectData({...projectData,projectImage:e.target.files[0]})}/>
                <img height={'250px'} width={'250px'}  src={preview?preview:iu} alt="project upload image" />
              </label>
             {!imageStatus&&<div className="text-danger">*Upload only following file types (jpg,jpeg,png)*</div>}
            </div>
          </div>
          <div className="col-lg-8">
            <div className="mb-3">
              <input type="text" placeholder='Project Title' className='border rounded p-2 w-100' value={projectData.title} onChange={e=>setProjectData({...projectData,title:e.target.value})}/>
            </div>
            <div className="mb-3">
              <input type="text" placeholder='Language Used' className='border rounded p-2 w-100' value={projectData.languages} onChange={e=>setProjectData({...projectData,languages:e.target.value})}/>
            </div>
            <div className="mb-3">
              <input type="text" placeholder='Project Github Link' className='border rounded p-2 w-100' value={projectData.github} onChange={e=>setProjectData({...projectData,github:e.target.value})}/>
            </div>
            <div className="mb-3">
              <input type="text" placeholder='Project Website Link' className='border rounded p-2 w-100' value={projectData.website} onChange={e=>setProjectData({...projectData,website:e.target.value})}/>
            </div>
            <div className="mb-3">
              <input type="text" placeholder='Project Overview' className='border rounded p-2 w-100' value={projectData.overview} onChange={e=>setProjectData({...projectData,overview:e.target.value})}/>
            </div>
          </div>
         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={()=>handleSave()}>Save</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer autoClose={3000} theme='colored'/>

    </>
  )
}

export default Add