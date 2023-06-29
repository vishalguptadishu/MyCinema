import Navbar from '../../component/Navbar/Navbar'
import Sliding from '../../component/Sliding_img/Sliding';
import Cart from '../../component/Cart/Cart';
import { useEffect,useState } from 'react';
import "./Tv.css"
const Tv =()=>{
let [listMovie1,setlistMovie1]=useState([])
let [listMovie2,setlistMovie2]=useState([])
let [listMovie3,setlistMovie3]=useState([])

let [listMovie5,setlistMovie5]=useState([])

    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/tv/airing_today?api_key=4dcc86e404d79aff3c884a2c3bade08a")
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
        fetch("https://api.themoviedb.org/3/tv/on_the_air?api_key=4dcc86e404d79aff3c884a2c3bade08a")
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

    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/tv/popular?api_key=4dcc86e404d79aff3c884a2c3bade08a")
            .then(response => response.json())
            .then(data => {
                setlistMovie3(data.results)
            })
            .catch(error => {
                  console.error('Error:', error);
            });
    },[])


    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=4dcc86e404d79aff3c884a2c3bade08a")
            .then(response => response.json())
            .then(data => {
                let data1=data.results
                let reversedValue = data1.reverse();
                 setlistMovie5(reversedValue)
                 

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
        
        <h2>movie revers/</h2>
        <Cart data={listMovie5} />
        </div>
    )
}
export default Tv ;