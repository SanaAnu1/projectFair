import React from 'react'
import Card from 'react-bootstrap/Card';
import Bimg from '../assets/Bimg.jpg'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap';

function ProjectCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className='row'>
        <Card style={{ width: '25rem' }} className='shadow mb-2 btn' onClick={handleShow}>
          <Card.Img variant="top" src={Bimg} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
          </Card.Body>
        </Card>

        <Modal size='lg' show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Project Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col sm={12} md={6}>
                <img className='img-fluid' src={Bimg} alt="" />
              </Col>
              <Col sm={12} md={6}>
                <h2 className='fw-bolder text-warning'>Title</h2>
                <p>
                  Project Overview: <span className='fw-bolder'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptatem amet adipisci soluta consequuntur repudiandae sint impedit quae perspiciatis eligendi cupiditate iste est rem, necessitatibus aliquid! Adipisci ipsum aliquam rem?
                  </span>
                </p>
                <p>
                  Language Used: <span className='fw-bolder text-danger'>HTML,CSS,JS</span>
                </p>
              </Col>
            </Row>
            <div className='mt-3'>
              <a href="https://github.com/" target='_blank' style={{color:"black",cursor:'pointer'}}>
                <i style={{height:'34px'}} className='fa-brands fa-github fa-2x'></i>
              </a>
              <a href="https://react-bootstrap.github.io/docs/components/modal/" target='_blank' className='ms-3' style={{color:"black",cursor:'pointer'}}>
                  <i style={{height:'34px'}} className='fa-solid fa-link fa-2x'></i>
              </a>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  )
}

export default ProjectCard