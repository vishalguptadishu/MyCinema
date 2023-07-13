import "./Aboute.css"

const Aboute=()=>{
    let elem=JSON.parse(localStorage.getItem("key_link"));
    console.log(elem)
    return (
        <>
         <div className="aboute">
            <img 
            src={`https://image.tmdb.org/t/p/w500${elem.backdrop_path}`}
            alt={elem.title}
            />
            <div  className="about_div">
              <p> Title = {elem.title}</p>
              <p>Release Date = {elem.release_date}</p>
              <p>Vote ={elem.vote_average}</p>
              <p className="about_dri" >{elem.overview}</p>
            </div>
         </div>
          
        </>
    )
}

export default Aboute; 