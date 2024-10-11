import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const TheNavBar = () => {
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary" bg='dark' data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/rodutos">ProdutosLegais</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/produtos">Produtos</Nav.Link>
            <Nav.Link href="/cadastroProdutos">Cadastro de Produtos</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default TheNavBar