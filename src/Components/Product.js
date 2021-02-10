import React from 'react';
import { useState } from 'react';

export default function Product(props) {
    const {product, onAdd, onRemove, cartItems,countCartItems, handleDecrement, item, itemsPrice} = props;
  
    return (
        <div className="container" style={{ maxWidth:"90rem"}}>
            <div className="row" style={{width:"80rem"}}>
               <div className="row" >
                  <div> <img className="small" src={product.image} alt={product.name} width={240} height={160}></img></div>
                  &nbsp;
                  &nbsp;
                  <div className="column"> <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  </div>   
               </div >
               <div className="row" style={{ width:"10rem", position:"left"}}>${product.price}</div>
               <div className="row" style={{ height:'2rem'}}>
                    <button onClick={() => {onRemove(product)}} className="remove">
                    <i class="fas fa-angle-down"></i>
                    </button>
                    &nbsp;
                    <>
                    <button style={{width:"2rem", height:"2rem", paddingBottom:"0.5rem" , paddingTop:" 0.25rem", backgroundColor:"white", border:"0.001rem black solid", pointerEvents:"none"}}>
                    {cartItems.map((item) => (
                    <div className="current.row" key={item.id}>
                         
                       {item.qty } 
                    </div>
                    ))}
                    </button>
                    
                    </>
                    &nbsp;
                    <button onClick={() => { onAdd(product)}} className="add">
                    <i class="fas fa-angle-up"></i>
                    </button>                          
                </div>    
                <div className="row">
                    <div>{cartItems.length ===  0 && <div>$0</div>}</div>
                    {cartItems.map((item) => (
                      <div key={item.id} className="row">
                 
                      ${item.qty * item.price.toFixed(2)}
                      </div>
                    ))}
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    );
}
