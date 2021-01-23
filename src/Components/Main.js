import React  from 'react';
import Product from './Product';

export default function Main(props){
    const {products, onAdd, countCartItems} = props;
    return (
       <main className= "block col-2">
           <h2> Your Cart ( 
               {countCartItems? (
                   <button className="badge">{countCartItems}</button>
                ) : (
                 ''
                )}   
            </h2>
           <div className="row">
               {products.map((product) => (
                   <Product key={product.id} product={product} onAdd={onAdd}></Product>
               ))}
           </div>
       </main>
    );       
}