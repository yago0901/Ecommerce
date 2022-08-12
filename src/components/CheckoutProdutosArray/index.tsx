import { Produto } from "../../pages/Home";
import { ContainerProdutcts } from "./style";

export default function CheckoutProdutosArray({ produtos }: { produtos: Produto[] }) {

  return (
    <ContainerProdutcts>
      {
        produtos.map( ( index ) => {
          return (
            <div key={index.id} >
              <div className="card">
                <div className="row">
                    <div className="col-md-8 cart">
                        <div className="title">
                            <div className="row">
                                <div className="col"><h4><b>Shopping Cart</b></h4></div>
                                <div className="col align-self-center text-right text-muted">3 items</div>
                            </div>
                        </div>    
                        <div className="row border-top border-bottom">
                            <div className="row main align-items-center">
                                <div className="col-2"><img className="img-fluid" src={index.img}/></div>
                                    <div className="col">
                                        <div className="row">{index.name}</div>
                                    </div>
                                    <div className="col">
                                        <a href="#">-</a><a href="#" className="border">1</a><a href="#">+</a>
                                    </div>
                                    <div className="col">R${index.price} <span className="close">&#10005;</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              
            </div>
          )
        })
      }
    
    </ContainerProdutcts>
  );
}
