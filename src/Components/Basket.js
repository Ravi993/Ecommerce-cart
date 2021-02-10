import React  from 'react';

export default function Basket(props) {
    const {cartItems} = props;
    const itemsPrice =cartItems.reduce((a,c) =>  a +c.price *c.qty, 0);
    const taxPrice= itemsPrice * 0.14;
    const shippingPrice= itemsPrice > 2000 ? 0 : 50;
    const totalPrice= itemsPrice + taxPrice + shippingPrice;
    return (
       <aside className="block">
          <h2 >Order Summary</h2>
          &nbsp;
          <div>{cartItems.length ===  0 && <div>Cart is Empty</div>}</div>
          {cartItems.map((item) => (
               <div key={item.id} className="row">
                   <div className="basket-left">{item.name}</div>
                    <div className="basket-right">
                      {item.qty} x ${item.price.toFixed(2)}
                    </div>
                </div>
            ))}
            {cartItems.length !== 0 && (
              <>
                <hr></hr>
                <div className="row"> 
                    <div className= "col-2">Subtotal</div>
                    <div className="basket-right">${itemsPrice.toFixed(2)}</div>
                </div>
                  <div className="row"> 
                    <div className="basket-left">Tax Price</div>
                    <div className="basket-right">${taxPrice.toFixed(2)}</div>
                  </div>
                <div className="row"> 
                    <div className= "basket-left">Shipping Price</div>
                    <div className="basket-right">${shippingPrice.toFixed(2)}</div>
                </div>
                <div className="row" > 
                    <div className= "basket-left">
                      <strong>Total Price</strong>
                    </div>
                    <div className="basket-right">
                      <strong>${totalPrice.toFixed(2)}</strong>
                    </div>
                </div>
                <div>
                  <hr/>
                  <div className={("row","center")}>
                    <button className="checkout" onClick={() => alert('Implement Checkout')}>Check Out</button>
                  </div>
                </div>
              </>
            )
            }
        </aside>
    );
}