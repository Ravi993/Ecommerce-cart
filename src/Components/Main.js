import React  from 'react';
import Product from './Product';


export default function Main(props){
    
    const {products, onAdd, countCartItems, cartItems, onRemove, itemsPrice} = props;
    return (
        <div>
        <main>
           <h2 style={{ padding:"2rem" }}> <i class="fas fa-shopping-basket"></i>&nbsp;Your Cart {' '}
               {countCartItems? (
                   <num>{'('}{countCartItems}{' ITEMS)'}</num>
                ) : (
                 ''
                )

                }
            </h2>
            <div className="container">
               <div  className={("row")}>
                  <div style={{width:"30%",textAlign:"center"}}>
                     Item
                   </div>          
                   <div style={{width:"13%"}}>Price</div>
                   <div style={{textAlign:"center"}}>
                      Quantity                  
                    </div>    
                    <div>
                       Total  
                   </div> 
                </div>
            </div>
            <hr/>
           <div className="col">
               {products.map((product) => (
                   <Product key={product.id} product={product} countCartItems={countCartItems} cartItems={cartItems} itemsPrice={itemsPrice} onAdd={onAdd} onRemove={onRemove}></Product>
               ))}    
           </div>
            
       </main>
       {countCartItems}
        </div>
    );       
}