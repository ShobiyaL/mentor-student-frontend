import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
 import './navbar.css'
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
function MSNavbar() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className='title  '>Student_Mentor</Navbar.Brand>
          <Nav className="me-auto">
          <Link to='/' className="link">AllData</Link>
          
          <Dropdown as={NavItem}>
      <Dropdown.Toggle as={NavLink}>Click to see more…</Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>
          <Link to='/create-mentor' className="drop_link">Create Mentor</Link>
          
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to='/create-student' className="drop_link">Create Student</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to='/add-student' className="drop_link">Add Students to Mentor</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to='/change-mentor' className="drop_link">Change Mentor</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to='/studentsForMentor' className="drop_link">Students for Particular Mentor</Link>
        </Dropdown.Item>

      </Dropdown.Menu>
    </Dropdown>
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default MSNavbar