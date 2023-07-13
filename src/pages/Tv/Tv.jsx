
import Sliding from '../../component/Sliding_img/Sliding';
import Cart from '../../component/Cart/Cart';
import { useEffect,useState } from 'react';
import "./Tv.css"
const Tv =()=>{
let [listMovie1,setlistMovie1]=useState([])
let [listMovie2,setlistMovie2]=useState([])
let [listMovie3,setlistMovie3]=useState([])
let [listMovie5,setlistMovie5]=useState([])

let obj =[
    {id:1,Title:"Bekaaboo", url:"https://v3img.voot.com/v3Storage/assets/bk-1681880342800.jpg"},
    {id:2,Title:"Pyar Ke Saat", url:"https://v3img.voot.com/jioimage/11/11/1669909488804_1669910052040_l.jpg"},
    {id:3,Title:"Junooniyatt", url:"https://v3img.voot.com/jioimage/60/3/1676293022524_1676293328923_l.jpg"},
    {id:4,Title:"Saavi Ki Savaari", url:"https://v3img.voot.com/jioimage/62/34/1661197755222_1661256640302_l.jpg"},
    {id:5,Title:"Shiv Shakti", url:"https://v3img.voot.com/v3Storage/assets/shiv-shakti-16x9-1687085161599.jpg"},
    {id:6,Title:"Based On A True Story", url:"https://v3img.voot.com/v3Storage/assets/bots_16x9-1685796544833.jpg"},
    {id:7,Title:"Shazam!", url:"https://v3img.voot.com/jioimage/newcpp/648833a8a6bb96753b3996fd/648833a8a6bb96753b3996fd_1686648143512_aa.jpg"},
]

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
        <Sliding obj={obj} />
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