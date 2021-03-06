import React from "react";
import Header from './Components/Header';
import Main from './Components/Main';
import Basket from './Components/Basket';
import Footer from './Components/Footer';
import ScrollButton from './Components/ScrollButton';
import data from './data';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';





function App(props) {

  const { products }=data;
  const [cartItems,setCartItems] =useState([]);
  const [count, setCount] = useState(0);
  
  const [isOpen, setisOpen] = useState(false);
  
  const openModal = () => setisOpen(true);
  const closeModal = () => setisOpen(false);

 
  const handleIncrement = () =>{
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };


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

    <div>
      
      <div>
          <Header countCartItems={cartItems.length} openModal={openModal} closeModal={closeModal} isOpen={isOpen} ></Header> 
          <div >
           <Main countCartItems={cartItems.length} onAdd={onAdd} onRemove={onRemove} products={products} cartItems={cartItems} count={count} handleIncrement={handleIncrement} decrement={handleDecrement} itemsPrice={props.itemsPrice}></Main>
          </div>
          <div className= "row-basket" style={{paddingBottom:"0.1rem"}}>
            <div className="style">
              <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}></Basket>
            </div>
          </div>
          &nbsp;
          <div>
            <ScrollButton></ScrollButton>
          </div>     
          <div className="row-footer">
            <Footer></Footer>
          </div>
      </div>
    </div>
    
  );
}

export default App;
