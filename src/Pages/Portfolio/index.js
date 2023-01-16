import React, { useState } from 'react';
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button
} from 'react-bootstrap';

import './Portfolio.css';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('about');

  const handleTabChange = tab => {
    setActiveTab(tab);
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Developer Name</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              active={activeTab === 'about'}
              onClick={() => handleTabChange('about')}
            >
              About Me
            </Nav.Link>
            <Nav.Link
              active={activeTab === 'portfolio'}
              onClick={() => handleTabChange('portfolio')}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              active={activeTab === 'contact'}
              onClick={() => handleTabChange('contact')}
            >
              Contact
            </Nav.Link>
            <Nav.Link
              active={activeTab === 'resume'}
              onClick={() => handleTabChange('resume')}
            >
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container className="my-5">
        {activeTab === 'about' && (
          <>
            <img
              src="developer-photo.jpg"
              alt="Developer Photo"
              className="mb-3"
            />
            <p>Short bio about me</p>
          </>
        )}
        {activeTab === 'portfolio' && (
          
            <div className="d-flex flex-wrap">
              <a href="#">
                <img
                  src="project-1.jpg"
                  alt="Project 1"
                  className="img-thumbnail mr-3 mb-3"
                />
                <p>Project 1</p>
              </a>
              <a href="#">
                <img
                  src="project-2.jpg"
                  alt="Project 2"
                  className="img-thumbnail mr-3 mb-3"
                />
                <p>Project 2</p>
              </a>
              <a href="#">
                <img
                  src="project-3.jpg"
                  alt="Project 3"
                  className="img-thumbnail mr-3 mb-3"
                />
                <p>Project 3</p>
              </a>
              <a href="#">
                <img
                  src="project-4.jpg"
                  alt="Project 4"
                    className="img-thumbnail mr-3 mb-3"
                />
                <p>Project 4</p>
                </a>
                <a href="#">
                    <img src="project-5.jpg" alt="Project 5" className="img-thumbnail mr-3 mb-3" />
                    <p>Project 5</p>
                </a>
                
            </div>

        )}  

        {activeTab === 'contact' && (
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )}

        {activeTab === 'resume' && (
            <a href="https://bold.pro/my/joshua-delmonte" target="_blank" rel="noopener noreferrer">
                <Button variant="primary">
                    <img src="your-image-source.jpg" alt="Resume Website" style={{ width: "20px", height: "20px" }} />
                    View Resume
                </Button>
            </a>
        )}
        </Container>
    </>
    );
};

export default Portfolio;