import React from 'react'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import pr from '../assets/prr.png'

function Profile() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='rounded p-2 border'>
        <div className='d-flex justify-content-between'>
            <h2>Profile</h2>
            <button className='btn btn-outline-warning' onClick={() => setOpen(!open)}><i className='fa-solid fa-caret-down'></i></button>
            
        </div>
        <Collapse in={open}>
        <div className='text-center' id="example-collapse-text">
        <form>
          <label>
            <input type="file" style={{display:'none'}} />
            <img width={'200px'} height={'200px'} className='img-fluid rounded-circle' src={pr} alt="upload profile pic" />
          </label>
            <div className="mb-2">
              <input type="text" className='rounded p-1 w-75' placeholder='Enter your github link here' />
            </div>
            <div className="mb-2">
              <input type="text" className='rounded p-1 w-75' placeholder='Enter your LinkedIn link here' />
            </div>
            <div className="mb-3 d-grid w-75 mx-auto">
              <button className='btn btn-warning'>Update</button>
            </div>
          </form>
        </div>
        </Collapse>
      </div>
      
    </>
  )
}

export default Profile