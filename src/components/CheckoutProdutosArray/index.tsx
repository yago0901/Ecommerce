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
                        <div className="row ">
                            <div className="row main align-items-center">
                              <div className="col-2">
                                  <img className="img-fluid" src={index.img}/>
                              </div>
                              <div className="col">
                                  <div className="row">{index.name}</div>
                              </div>
                              <div className="col text-center">
                                  <a href="#">-</a><a href="#" className="border">1</a><a href="#">+</a>
                              </div>
                              <div className="col text-end">
                                R${index.price}
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
