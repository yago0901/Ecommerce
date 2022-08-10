import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

import ProdutosArray from '../../components/ProdutosArray';
import { URL_API } from '../../global/api/api';
import { BuscaProdutos, Conteiner, Filtro } from './style';

export interface Produto  {
  id: number;
  name: string;
  description: string;
  img: string;
  price: number;
}

export function Home() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    async function getProdutos() {
      const { data } = await URL_API.get('/products');
      setProdutos(data);
    }

    getProdutos();
  }, []);
  
  return (
    <>
      <Conteiner>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Text className="fw-bold">Filtrar</Form.Text> <br /><br />
            <Form.Text className="fw-bold">Preço</Form.Text> <br />
            <Form.Label >De</Form.Label>
            <Form.Control type="number" aria-label="Amount" placeholder="R$0,00" />
            <Form.Label >Até</Form.Label>
            <Form.Control type="number" aria-label="Amount" placeholder="R$0,00" /><br />
            <Form.Text className="fw-bold">Ordenar</Form.Text> <br />
            <Form.Label>Preço</Form.Label>
            <Dropdown>
              <Dropdown.Toggle id="ordenar-produtos" variant="outline-secondary">
                Manter tamanho input
              </Dropdown.Toggle>
              <Dropdown.Menu >
                <Dropdown.Item href="#/action-1" active> Maior Preço</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Menor Preço</Dropdown.Item>
              </Dropdown.Menu> <br /><br />
            </Dropdown>
            <Form.Label>Data de inclusão</Form.Label>
            <Dropdown>
              <Dropdown.Toggle id="ordenar-produtos" variant="outline-secondary">
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
            <ProdutosArray produtos={produtos} />
          </BuscaProdutos>
        </Filtro>
      </Conteiner>
    </>
  )
}
