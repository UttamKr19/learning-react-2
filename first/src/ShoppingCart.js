import React from 'react'
import { useState } from 'react';
export default function ShoppingCart() {

    const shoppingItems=['Apples','Tomatoes','Oranges','Bananas','Pineapple']

    const [cartItems,setCartItems]=useState([]);


    const shoppingItemsContent=shoppingItems.map((item,index)=>{
        return <div>
                <p>
                    {item} 
                    <button class="fas fa-shopping-cart" onClick={()=>onAddToCart(index)}></button>
                </p>
                
            </div>
    })

    const cartItemsContent=cartItems.map((item,index)=>{
        return <div>
                <p>
                    {item} 
                    <i class="fas fa-trash-alt" onClick={()=>onDeleteItem(index)}> </i>
                </p>
                
            </div>
    })


    function onDeleteItem(index){
        var tempCartItems=[...cartItems];
        tempCartItems.splice(index,1);
        setCartItems(tempCartItems);
    }

    function onAddToCart(index){
        setCartItems([...cartItems,shoppingItems[index]]);
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-5">
                
                <h1>Shopping items</h1>
                <div>{shoppingItemsContent}</div>
                <br/>
                <hr/>
                <h2>My cart</h2>
                <div className="cartItems">{cartItemsContent}</div>

            </div>
            
        </div>
    )
}
