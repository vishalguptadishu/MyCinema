import "./Cart.css"
const Cart =({data})=>{
    console.log("cart",data)
    
    return(
    <div className="cart">    
        {data.map(movie => (
            <img
            key={movie.id}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            />
        ))}       
    </div>
    )
}
export default Cart;