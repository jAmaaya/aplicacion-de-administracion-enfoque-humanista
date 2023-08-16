import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Footbar = () => {
  return (
    <>
    <Navbar data-bs-theme="dark"  className='namess'>
            <Navbar.Brand href="/">
            {/* <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              style={{borderRadius:'100%'}}
            />{' '} */}
              Powered by Amaaya @copyright 2023
              </Navbar.Brand>
    </Navbar>
    </>
  )
}

export default Footbar