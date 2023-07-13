
import Sliding from '../../component/Sliding_img/Sliding';
import Cart from '../../component/Cart/Cart';
import { useEffect,useState } from 'react';
import "./Home.css"
const Home =()=>{
let [listMovie1,setlistMovie1]=useState([])
let [listMovie2,setlistMovie2]=useState([])
let [listMovie3,setlistMovie3]=useState([])
let [listMovie4,setlistMovie4]=useState([])
let [listMovie5,setlistMovie5]=useState([])

let obj =[
    {id:1,Title:"Bloody Daddy", url:"https://v3img.voot.com/v3Storage/assets/bloody-daddy-16x9-1686474684847.jpg"},
    {id:2,Title:"The Idol", url:"https://v3img.voot.com/v3Storage/assets/theidol_carousel_16x9-1685926783746.jpg"},
    {id:3,Title:"Bhediya", url:"https://v3img.voot.com/v3Storage/assets/bhediya_16x9-1686132670294.jpg"},
    {id:4,Title:"Rafuchakkar", url:"https://v3img.voot.com/v3Storage/assets/rafuchakkar-16x9-1686754742076.jpg"},
    {id:5,Title:"Shiv Shakti", url:"https://v3img.voot.com/v3Storage/assets/shiv-shakti-16x9-1687085161599.jpg"},
    {id:6,Title:"Based On A True Story", url:"https://v3img.voot.com/v3Storage/assets/bots_16x9-1685796544833.jpg"},
    {id:7,Title:"Shazam!", url:"https://v3img.voot.com/jioimage/newcpp/648833a8a6bb96753b3996fd/648833a8a6bb96753b3996fd_1686648143512_aa.jpg"},
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
        fetch("https://api.themoviedb.org/3/tv/popular?api_key=4dcc86e404d79aff3c884a2c3bade08a")
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
    console.log(listMovie1)
    return (
        <div className='Home'>
        <Sliding obj={obj} />
         <h2>Most Watched This Week</h2>
        <Cart data={listMovie1} />
         <h2> This Week</h2>
        <Cart data={listMovie2} />
        <h2> top Rated</h2>
        <Cart data={listMovie3} />
        <h2>tv/popular</h2>
        <Cart data={listMovie4} />
        <h2>movie/upcoming</h2>
        <Cart data={listMovie5} />
        </div>
    )
}
export default Home ;