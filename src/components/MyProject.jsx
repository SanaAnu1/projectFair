import React from 'react'
import Add from './Add'
import Edit from './Edit'

function MyProject() {
  return (
    <div className='border rounded p-2 mb-3'>
        <div className="d-flex justify-content-between align-items-center">
          <h2>My Project</h2>
          <Add></Add>
        </div>
        <div className="mt-4">
          <div className="border rounded d-flex justify-content-between align-items-center mb-3 p-2">
            <h5>Title</h5>
            <div className='icons d-flex align-items-center'>
              <Edit></Edit>
              <a href="" target='_blank' className='btn btn-link'><i style={{height:'34px'}} className='fa-brands fa-github fa-2x'></i></a>
              <button className='btn btn-link text-danger'><i style={{height:'34px'}} className='fa-solid fa-trash fa-2x'></i></button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default MyProject