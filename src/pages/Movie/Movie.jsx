
import Sliding from '../../component/Sliding_img/Sliding';
import Cart from '../../component/Cart/Cart';
import { useEffect,useState } from 'react';
import "./Movie.css"

const Movie =()=>{
let [listMovie1,setlistMovie1]=useState([])
let [listMovie2,setlistMovie2]=useState([])
let [listMovie3,setlistMovie3]=useState([])
let [listMovie4,setlistMovie4]=useState([])
let [listMovie5,setlistMovie5]=useState([])

let obj =[
    {id:1,Title:"Suits", url:"https://v3img.voot.com/v3Storage/assets/suits-16x9-1686382489404.jpg"},
    {id:2,Title:"The Dark knight", url:"https://v3img.voot.com/v3Storage/assets/the_dark_knight_1920x1080-1685950193383.jpg"},
    {id:3,Title:"Blind", url:"https://v3img.voot.com/v3Storage/assets/blind-16x9-1688657905248.jpg"},
    {id:4,Title:"Crackdown", url:"https://v3img.voot.com/v3Storage/assets/crackdown---16x9-1687369150585.jpg"},
    {id:5,Title:"Rafuchakkar", url:"https://v3img.voot.com/v3Storage/assets/rafuchakkar-16x9-2-1687781258742.jpg"},
    {id:6,Title:"Kaisi Yeh Yaariaan", url:"https://v3img.voot.com/v3Storage/assets/kyy-16x9-1680086935952.jpg"},
    {id:7,Title:"Game Of Thrones!", url:"https://v3img.voot.com/v3Storage/assets/got_16-1683938772588.jpg"},
]

    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=4dcc86e404d79aff3c884a2c3bade08a")
            .then(response => response.json())
            .then(data => {
                setlistMovie1(data.results)
            })
            .catch(error => {
                  console.error('Error:', error);
            });
    },[])

    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4dcc86e404d79aff3c884a2c3bade08a")
            .then(response => response.json())
            .then(data => {
                setlistMovie2(data.results)
            })
            .catch(error => {
                  console.error('Error:', error);
            });
    },[])

    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=4dcc86e404d79aff3c884a2c3bade08a")
            .then(response => response.json())
            .then(data => {
                setlistMovie3(data.results)
            })
            .catch(error => {
                  console.error('Error:', error);
            });
    },[])
     
    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/trending/all/day?api_key=4dcc86e404d79aff3c884a2c3bade08a")
            .then(response => response.json())
            .then(data => {
                setlistMovie4(data.results)
            })
            .catch(error => {
                  console.error('Error:', error);
            });
    },[])

    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=4dcc86e404d79aff3c884a2c3bade08a")
            .then(response => response.json())
            .then(data => {
                setlistMovie5(data.results)
            })
            .catch(error => {
                  console.error('Error:', error);
            });
    },[])

    return (
        <div className='Home'>
        <Sliding obj={obj} />
         <h2>Most Watched This Week</h2>
        <Cart data={listMovie1} />
         <h2> This Week</h2>
        <Cart data={listMovie2} />
        <h2> top Rated</h2>
        <Cart data={listMovie3} />
        <h2>movie2/</h2>
        <Cart data={listMovie4} />
        <h2>movie/</h2>
        <Cart data={listMovie5} />
        </div>
    )
}
export default Movie ;