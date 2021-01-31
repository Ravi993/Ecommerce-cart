import React  from 'react';
import Product from './Product';


export default function Main(props){
    
    const {products, onAdd, countCartItems, onRemove} = props;
    return (
       <main className= "block col-2">
           <h2> Your Cart {' '}
               {countCartItems? (
                   <num>{'('}{countCartItems}{' ITEMS)'}</num>
                ) : (
                 ''
                )

                }
            </h2>
            <hr/>
           <div className="col">
               {products.map((product) => (
                   <Product key={product.id} product={product} onAdd={onAdd} onRemove={onRemove}></Product>
               ))}
           </div>
       </main>
    );       
}