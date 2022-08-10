import { Produto } from "../../pages/Home";
import { ContainerProdutcts } from "./style";

export default function ProdutosArray({ produtos }: { produtos: Produto[] }) {

  return (
    <ContainerProdutcts>
      {
        produtos.map( ( index ) => {
          return (
            <div key={index.id} className="card shadow p-3 mb-5 bg-body rounded" style={{ width: '14rem' }}>
              <img className="card-img-top h-50 d-inline-block " src={index.img} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{index.name}</h5>
                <p className="card-text">{index.description}</p>
                <a href="#" className="card-link">R${index.price}</a>
              </div>
            </div>
          )
        })
      }
    </ContainerProdutcts>
  );
}