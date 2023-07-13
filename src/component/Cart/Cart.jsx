import { json } from "react-router-dom";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
const Cart = ({ data }) => {
  let navigate=useNavigate()

    function handalCartClick(elem){
       localStorage.setItem("key_link",JSON.stringify(elem) )
       navigate("/Aboute")
    }
  return (
    <div className="Cart"  >
      {data.map((elem) => (
        <div className="Cart_main" key={elem.provider_id} onClick={()=>{handalCartClick(elem)}} >
          <img
            src={`https://image.tmdb.org/t/p/w500${elem.poster_path}`}
            alt={elem.title}
          />
        </div>
      ))}
    </div>
  );
};
export default Cart;
