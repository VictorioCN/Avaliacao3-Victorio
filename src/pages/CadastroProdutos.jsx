import React from 'react'

import Container from 'react-bootstrap/esm/Container';

import FloatingLabel from 'react-bootstrap/FloatingLabel';

import Form from 'react-bootstrap/Form';

import Alert from 'react-bootstrap/Alert';

import Button from 'react-bootstrap/Button';

import Nav from "react-bootstrap/Nav"

import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import style from './CadastroProdutos.module.css'


const url = "http://localhost:3000/usuarios"

const CadastroProdutos = () => {

  // variaveis pro usuario
  const [nome, setNome] = useState("")
  const [categoria, setCategoria] = useState("")
  const [preco, setPreco] = useState("")

  // variaveis pro alerta
  const [alertaClass, setAlertaClass] = useState("mb-3 d-none")
  const [alertaMensagem, setAlertMensagem] = useState("")

  const navigate = useNavigate()

  const handleSubmit = async (e) =>{
    e.preventDefault()

    if(!nome == ""){
      if(!categoria == ""){
        if(!preco == ""){
          const user = {nome, categoria, preco}
          const res =await fetch(url, {
            method: "POST",
            headers: {"Comtent-Type": "application/json"},
            body: JSON.stringify(user)
          })
          alert("Produto cadastrado com sucesso")
          setNome("")
          setCategoria("")
          setPreco("")
          navigate("/Login")
        }
        else{
          setAlertaClass("mb-3")
          setAlertMensagem("O campo nome não pode ser vazio")
        }
      }
      else{
        setAlertaClass("mb-3")
        setAlertMensagem("O campo categoria não pode ser vazio")
      }
    }
    else{
      setAlertaClass("mb-3")
      setAlertMensagem("O campo preco não pode ser vazio")
    }
  }

  return (
    <div>
      <Container className='Tudo'>

        <form onSubmit={handleSubmit}>

      <FloatingLabel
        controlId="floatingInputName"
        label="Nome"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Digite seu nome..." value={nome} onChange={(e) =>{setNome(e.target.value);}}/>
        </FloatingLabel>

        <FloatingLabel
        controlId="floatingInputEmail"
        label="Email"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="frutas, verdeuras, ETC..." value={categoria} onChange={(e) =>{setCategoria(e.target.value);}}/>
      </FloatingLabel>
        
      <FloatingLabel controlId="floatingPassword" label="Senha" className='mb-3'>

        <Form.Control type="text" placeholder="preço do produto" value={preco} onChange={(e) =>{setPreco(e.target.value);}}/>
      </FloatingLabel>

      <Alert key="danger" variant="danger" className={alertaClass}>
          {alertaMensagem}
        </Alert>

        <Button variant="primary" type="submit">Cadastrar</Button>{' '}

      </form>
      </Container>
    </div>
  )
}

export default CadastroProdutos