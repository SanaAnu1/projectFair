import React from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'

function Project() {
  return (
    <>
      <Header></Header>
      <div style={{marginTop:'150px'}} className='container-fluid'>
        <div className='d-flex justify-content-between '>
          <h1 className='ms-5'>All Projects</h1>
          <input style={{width:'310px'}} className='rounded p-2' type="text"  placeholder='Search products by language used'/>
        </div>
        <Row className='mt-5'>
            <Col sm={12} md={6} lg={4}>
                <ProjectCard></ProjectCard>
            </Col>
        </Row>
      </div>
    </>
  )
}

export default Project