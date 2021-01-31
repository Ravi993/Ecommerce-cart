import React, { Component } from "react";
import Header from './Components/Header';
import Main from './Components/Main';
import Basket from './Components/Basket';
import data from './data';
import { useState } from 'react';



function App(props) {

  const { products }=data;
  const [cartItems,setCartItems] =useState([]);
  
  
  const [isOpen, setisOpen] = useState(false);
  
  const openModal = () => setisOpen(true);
  const closeModal = () => setisOpen(false);




  const onAdd = (product) =>{
    const exist= cartItems.find(x => x.id=== product.id);
    if (exist){
      setCartItems(
        cartItems.map((x) => 
           x.id === product.id ? {...exist, qty:exist.qty +1} :x
        )
      );
    }else{
      setCartItems([...cartItems,{...product, qty: 1}]);
    }
  };

  const onRemove = (product) => {
    const exist=cartItems.find((x)=> x.id === product.id);
    if (exist.qty ===1 ){
       setCartItems(cartItems.filter((x) => x.id !== product.id));
    }else{
      setCartItems(
        cartItems.map((x) =>
           x.id===product.id ? { ...exist, qty: exist.qty -1} : x
         )
       );
    }
  };

  return (

    <div className="container">
      
      <div className="App" >
          <Header countCartItems={cartItems.length} openModal={openModal} closeModal={closeModal} isOpen={isOpen} ></Header> 
          <div className="row">
           <Main countCartItems={cartItems.length} onAdd={onAdd} onRemove={onRemove} products={products}></Main>
          </div>
          <div className='style'>
           <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}></Basket>
          </div>
      </div>
    </div>
    
  );
}

export default App;
