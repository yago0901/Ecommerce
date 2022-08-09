import React, { memo } from 'react'
import { Conteiner, BuscaProdutos, Filtro } from './style'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import ProdutosArray from '../ProdutosArray';

function Home() {
  return (
    <Conteiner>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Text className="fw-bold">Filtrar</Form.Text> <br/><br/>
          <Form.Text className="fw-bold">Preço</Form.Text> <br/>
          <Form.Label >De</Form.Label>
          <Form.Control type="number" aria-label="Amount" placeholder="R$0,00" />
          <Form.Label >Até</Form.Label>
          <Form.Control type="number" aria-label="Amount" placeholder="R$0,00" /><br/>
          <Form.Text className="fw-bold">Ordenar</Form.Text> <br/>
          <Form.Label>Preço</Form.Label>
          <Dropdown>
            <Dropdown.Toggle id="ordenar-produtos"  variant="outline-secondary">
            Manter tamanho input
            </Dropdown.Toggle>
            <Dropdown.Menu >
              <Dropdown.Item href="#/action-1" active> Maior Preço</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Menor Preço</Dropdown.Item>
            </Dropdown.Menu> <br/><br/>
          </Dropdown>
          <Form.Label>Data de inclusão</Form.Label>
          <Dropdown>
            <Dropdown.Toggle id="ordenar-produtos"  variant="outline-secondary">
            Manter tamanho input
            </Dropdown.Toggle>
            <Dropdown.Menu >
              <Dropdown.Item href="#/action-1" active>Mais recente</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Mais antigo</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Filtro>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="search" placeholder="Busca" />
        </Form.Group>
        <BuscaProdutos>
          <ProdutosArray/>
        </BuscaProdutos>
      </Filtro>
    </Conteiner>
  )
}

export default memo(Home);