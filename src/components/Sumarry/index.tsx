export default function Sumarry() {
  return(
    <div className="col-md-3 summary bg-secondary rounded position-relative">
        <div><h5><b>Summary</b></h5></div>
        <hr/>
        <div className="row">
            <div className="col" >ITEMS 3</div>
            <div className="col text-right">&euro; 132.00</div>
        </div>
        <form>
            <p>SHIPPING</p>
            <select><option className="text-muted">Standard-Delivery- &euro;5.00</option></select>
            <p>GIVE CODE</p>
            <input id="code" placeholder="Enter your code"/>
        </form>
        <div className="row" >
            <div className="col">TOTAL PRICE</div>
            <div className="col text-right">&euro; 137.00</div>
        </div>
        <button className="btn">CHECKOUT</button>
    </div>
  )

}