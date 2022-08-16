import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';

import ProdutosArray from '../../components/CheckoutProdutosArray';
import Sumarry from '../../components/Sumarry';
import { URL_API } from '../../global/api/api';
import { BuscaProdutos, Conteiner, Filtro, CartText } from './style';

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
          <CartText>
          <div className="col"><h4><b>Shopping Cart</b></h4></div>
          <div className="col align-self-center text-right text-muted">quantidade</div>
          <div className="col align-self-center text-right text-muted">valor</div>
          </CartText>
          <BuscaProdutos>
            <ProdutosArray produtos={produtos} />
            <Sumarry/>
          </BuscaProdutos>
        </Filtro>                
      </Conteiner>
    </>
  )
}
