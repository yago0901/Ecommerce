export default function Sumarry() {
  return(
    <div className="col-md-3 summary bg-secondary rounded position-relative ">
        <div><h5 className="text-center mt-3"><b>Car</b></h5></div>
        <hr/>
        <div className="row">
            <div className="col text-center" >ITEMS</div>
            <div className="col text-right">VALOR</div>
        </div> <br/>
        <div className="row">
            <div className="col text-center" >Item 1</div>
            <div className="col text-right">R$99,99</div>
        </div>
        <div className="row">
            <div className="col text-center" >Item 2</div>
            <div className="col text-right">R$99,99</div>
        </div> <br/>
        <div><h5 className="text-center mt-3"><b>TOTAL</b></h5></div>
        <div className="row">
            <div className="col text-center" >VALOR</div>
            <div className="col text-right">R$199,98</div>
        </div> <br/>
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary ">CHECKOUT</button>
        </div>
    </div>
  )

}