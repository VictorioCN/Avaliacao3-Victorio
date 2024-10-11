import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import ModalCadastrar from '../components/ModalCadastrar';
import style from './Produtos.module.css'


const url = "http://localhost:3000/usuarios"

// set

const Produtos = () => {

  const [produtos, setProdutos] = useState ([])

  const [modalCadastrar, setModalCadastrar] = useState(false);

  useEffect(() => {
    async function fetchData(){
      try{
        const res = await fetch(url)
        const users = await res.json()
        setProdutos(users)
      }
      catch(error){
        console.log(error.message)
      }
    }
    fetchData()
  },[]);

  return (
    <div>
      <Container className='Tudo'>
        <h1>Produtos</h1>
        <div className='d-grid col-2 gap-2'>
        <Button variant="primary"
        size='lg'
        className='mb-3 d-inline-flex justify-content-center'
        onClick={() => {
          setModalCadastrar(true)
        }}
        >
          <span
          className='material-symbols-outlined flex'
          style={{ fontSize: "30px" }}>
          add_circle
          </span>
          Cadastrar</Button>{' '}

        </div>
      </Container>

      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>CATGORIA</th>
          <th>PREÇO</th>
        </tr>
      </thead>
      <tbody>
        {produtos.map((user)=> (
        <tr key={user.id}>
          <td>{user.nome}</td>
          <td>{user.categoria}</td>
          <td>{user.preco}</td>
          <td>
            <ButtonGroup size='sm'>
      <Button variant="info">Editar</Button>
      <Button variant="danger"
       onClick={ async () => {
        const res = await fetch(`http://localhost:3000/usuarios/${user.id}`,
        {method:"DELETE",
          headers:{"Content-Type" : "application/json"},
        });

        const produtoRemovido = await res.json()
      alert(`Usuario ${produtoRemovido.id} foi excluido`)
      }}
      >
        Excluir</Button>
    </ButtonGroup>
    </td>
        </tr>
        ))}
      </tbody>
    </Table>

    <ModalCadastrar
    show={modalCadastrar}
    onHide={() => {
      setModalCadastrar(false)
    }}/>
    </div>
  )
}

export default Produtos