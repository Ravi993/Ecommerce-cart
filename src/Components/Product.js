import React from 'react';


export default function Product(props) {
    const {product, onAdd, onRemove, itemsPrice, countCartItems} = props;
    const {cartItems}= props;
    return (
        <div className="container">
            <div className={("row")}>
               <div className="column">
                  <img className="small" src={product.image} alt={product.name} width={240} height={160}></img>
                  <h3>{product.name}</h3>
               </div>
               
               <div>${product.price}</div>
               <div>
                    <button onClick={() => onRemove(product)} className="remove">
                        v
                    </button>
                  

                    <button onClick={() => onAdd(product)} className="add">
                        ∧
                    </button>                          
                </div>    
                <div>
                  
                </div> 
            </div>
            <br/>
            <br/>
        </div>
    );
}
