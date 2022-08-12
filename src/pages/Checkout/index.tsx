import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';

import ProdutosArray from '../../components/CheckoutProdutosArray';
import Sumarry from '../../components/Sumarry';
import { URL_API } from '../../global/api/api';
import { BuscaProdutos, Conteiner, Filtro } from './style';

export interface Produto  {
  id: number;
  name: string;
  description: string;
  img: string;
  price: number;
}

export function Checkout() {
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
        
        <Filtro>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="search" placeholder="Checkout" />
          </Form.Group>
          <BuscaProdutos>
            <ProdutosArray produtos={produtos} />
          </BuscaProdutos>
        </Filtro>
        <Sumarry/>
                
      </Conteiner>
    </>
  )
}
