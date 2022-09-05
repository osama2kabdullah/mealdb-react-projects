
import { useEffect, useState } from 'react';
import '../App.css';
import Card from './Card';
import Cart from './Cart';
import { addToDb } from './Storage';

const Body = () => {
    const [datas, setDatas] = useState([]);
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=m')
        .then(res=>res.json())
        .then(data=>setDatas(data.meals))
    },[]);
    const [cart, setCart] = useState([]);
    console.log(cart);
    const imgClick = (data) => {
        const newcart = [...cart, data]
        setCart(newcart);
        // save to local storage
        addToDb(data);
    }
    
    // get from localstorage
    useEffect(()=> {
        let dbObj = {};
        const exist = localStorage.getItem('selected-meal');
        dbObj = JSON.parse(exist);
        
        const addedItem = []
        // match data
        for (const id in dbObj) {
            const match = datas.find(data=>data.idMeal === id);
            if(addedItem){
                addedItem.push(match);
            }
        }
        console.log(addedItem);
        // setCart(addedItem);
        
        
    },[datas])
    
    return (
        <div>
            <div className="body">
            <div className="content">
                {
                    datas.map(data=><Card key={data.idMeal} btn={()=>imgClick(data)} data={data}></Card>)
                }
            </div>
            <div className="cart">
                <Cart data={cart}></Cart>
            </div>
            </div>
        </div>
    );
};

export default Body;