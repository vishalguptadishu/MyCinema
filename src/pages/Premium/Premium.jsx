
import Sliding from '../../component/Sliding_img/Sliding';
import Cart from '../../component/Cart/Cart';
import { useEffect,useState } from 'react';
import "./Premium.css"

let obj =[
    {id:1,Title:"The Witcher", url:"https://www.wallpaperflare.com/static/843/309/244/the-witcher-the-witcher-3-wild-hunt-geralt-of-rivia-video-games-wallpaper.jpg"},
    {id:2,Title:"Industry", url:"https://v3img.voot.com/v3Storage/assets/industry16x9-1684387466930.png"},
    {id:3,Title:"The Crime Of The Century", url:"https://v3img.voot.com/v3Storage/assets/the-crime-of-the-century_ivy-16x9-carousel--1688100371114.jpg"},
    {id:4,Title:"Girls", url:"https://v3img.voot.com/v3Storage/assets/girls-s6_ivy-16x9-carousel-1684851699276.jpg"},
    {id:5,Title:"Random Acts", url:"https://v3img.voot.com/v3Storage/assets/random-acts-of-flyness-16x9-1687262989344.jpg"},
    {id:6,Title:"From The Earth To The Moon", url:"https://v3img.voot.com/v3Storage/assets/from-the-earth-to-the-moon-16x9-1687939980044.jpg"},
    {id:7,Title:"Enlightened", url:"https://v3img.voot.com/v3Storage/assets/enlightened_16x9-1685885837049.jpg"},
]

    const Premium =()=>{
    let [listMovie1,setlistMovie1]=useState([])
    let [listMovie2,setlistMovie2]=useState([])

     useEffect(()=>{
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=4dcc86e404d79aff3c884a2c3bade08a")
            .then(response => response.json())
            .then(data => {
                let data1=data.results
                let reversedValue = data1.reverse();
                 setlistMovie1(reversedValue)
            })
            .catch(error => {
                  console.error('Error:', error);
            });
    },[])

    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/discover/tv?api_key=4dcc86e404d79aff3c884a2c3bade08a")
            .then(response => response.json())
            .then(data => {
                let data1=data.results
                let reversedValue = data1.reverse();
                 setlistMovie2(reversedValue)
            })
            .catch(error => {
                  console.error('Error:', error);
            });
    },[])

    return (
        <div className='Home'>
        <Sliding obj ={obj}/>
         <h2>Most Watched This Week</h2>
        <Cart data={listMovie1} />
         <h2> This Week</h2>
        <Cart data={listMovie2} />
        </div>
    )
}
export default Premium ;