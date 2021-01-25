import React from 'react';

export default function Product(props) {
    const {product, onAdd} = props;
    return (
        <div className="container">
            <div className="row ">
               <img className="small" src={product.image} alt={product.name} width={240} height={160}></img>
               <h3>{product.name}</h3>
               <div>${product.price}</div>
               <div>
                  <button onClick={() => onAdd(product)}>Add To Cart</button>
               </div>
            </div>
        </div>
    );
}
