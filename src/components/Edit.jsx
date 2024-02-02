import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import iu from '../assets/iu.jpg'

function Edit() {
  const [show,setShow]=useState(false)
  const handleShow=()=>setShow(true)
  const handleClose=()=>setShow(false)

  return (
    <>
       <button onClick={handleShow} style={{textDecoration:'none'}} className='btn btn-link text-success d-flex align-items-center fw-bolder'><i style={{height:'34px'}} className='fa-solid fa-edit fa-2x'></i></button>
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
                <input type="file" style={{display:'none'}} />
                <img height={'250px'} width={'250px'}  src={iu} alt="project upload image" />
              </label>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="mb-3">
              <input type="text" placeholder='Project Title' className='border rounded p-2 w-100'/>
            </div>
            <div className="mb-3">
              <input type="text" placeholder='Language Used' className='border rounded p-2 w-100'/>
            </div>
            <div className="mb-3">
              <input type="text" placeholder='Project Github Link' className='border rounded p-2 w-100'/>
            </div>
            <div className="mb-3">
              <input type="text" placeholder='Project Website Link' className='border rounded p-2 w-100'/>
            </div>
            <div className="mb-3">
              <input type="text" placeholder='Project Overview' className='border rounded p-2 w-100'/>
            </div>
          </div>
         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success">Update</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Edit