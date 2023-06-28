import Navbar from '../../component/Navbar/Navbar'
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

    return (
        <div className='Home'>
        <Navbar />
        <Sliding />
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