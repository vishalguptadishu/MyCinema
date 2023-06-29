import "./Cart.css"
const Cart =({data})=>{

    
    return(
    <div className="Cart">    
          
       
        
            {data.map((elem) => (
                <div className="Cart_main" key={elem.provider_id}>
                <img
                    src={`https://image.tmdb.org/t/p/w500${elem.poster_path}`}
                    alt={elem.title}
                />
               
                </div>
            ))}
         
         
    </div>
    )
}
export default Cart;


