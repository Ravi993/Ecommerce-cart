import React from 'react';


export default function Product(props) {
    const {product, onAdd, onRemove, itemsPrice, countCartItems} = props;
    const {cartItems}= props;
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
               <div style={{ width:"10rem"}}>${product.price}</div>
               <div>
                    <button onClick={() => onRemove(product)} className="remove">
                    <i class="fas fa-angle-down"></i>
                    </button>
                    
                    &nbsp;

                    <button onClick={() => onAdd(product)} className="add">
                    <i class="fas fa-angle-up"></i>
                    </button>                          
                </div>    
                <div>
                  ${0}
                </div> 
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    );
}
