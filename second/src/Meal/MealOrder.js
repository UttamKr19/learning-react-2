import React from 'react'
import { useState } from 'react';
import swal from 'sweetalert'
import { useEffect } from 'react';
import axios from 'axios';

export default function MealOrder(props) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [item, setItem] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState();
    const [mealId, setMealId] = useState();


    const [orderList, setOrderList] = useState([]);

    const [mealCategoryData, setMealCategoryData] = useState();
    const [categoryFoodData, setCategoryFoodData] = useState();
   

    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php').then((res) => {
            console.log(res.data.categories);
            setMealCategoryData(res.data.categories);

        }).catch(error => { console.log(error) })

    }, [])

    const categoryList = mealCategoryData?.map((item) => {
        return (
            <option key={item.idCategory} value={item.strCategory} >
                {item.strCategory}
            </option>
        )
    })

    const foodList = categoryFoodData?.map((item) => {
        return (
            <option key={item.idMeal} value={item.strMeal} >
                {item.strMeal}
            </option>
        )
    })

    const categoryOnChange = (category) => {
        let url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=` + category
        console.log(url);

        axios.get(url).then((res) => {
            setCategoryFoodData(res.data.meals);
        }).catch(error => { console.log(error) })

    }

    const foodOnChange=(e)=>{
        setItem(e.target.value);
        setPrice(Math.floor(Math.random() * 1000));
    }

    const placeOrder = (e) => {
        e.preventDefault();
        let id = new Date().valueOf();
        let newOrder = {
            name: name, email: email, item: item, quantity: quantity, price: price, orderId: id, mealId:mealId
        }

        setOrderList([...orderList, newOrder])
        swal('Order Placed', 'Congrats', 'success');

    }

    const orderListContent = orderList.map((order) => {
        return <tbody>
            <tr>
                <td>{order.orderId}</td>
                <td>{order.item}</td>
                <td>{order.quantity}</td>
                <td>{order.price}</td>
                <td>{order.name}</td>
            </tr>
        </tbody>

    })


    function goBack() {
        props.backButton();
    }

    return (
        <div style={{ height: "100%" }} >
            {props.backButton!=undefined?<div style={{float:'right',margin:'20px'}} onClick={goBack}><button  className="btn btn-sm btn-danger" >X</button></div>:null}
            <div id="orderForm" >
                <form onSubmit={placeOrder}>
                    <div>
                        <h3 className="text-center">Customer Details</h3>
                        <label>Name</label>
                        <input type="text" className="form-control" 
                            placeholder="Name" required="required"
                            value={name} onChange={(e) => setName(e.target.value)} />
                        <label>Email</label>
                        <input type="email" className="form-control" 
                            placeholder="Email" required="required"
                            value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <br />
                    <div>
                        <h3 className="text-center">Order Details</h3>
                        <div>

                            <label>Category</label>
                            <select className="form-control form-select" required
                                onChange={(event) => { categoryOnChange(event.target.value) }}>
                                <option value='' >
                                    Select Category
                                </option>
                                {categoryList}
                            </select>

                            <label>Food Item</label>
                            <select className="form-control form-select" required
                                value={item}
                                onChange={(e) => foodOnChange(e)} >
                                <option value='' >
                                    Select Item
                                </option>
                                {foodList}
                            </select>

                            <label>Quantity</label>
                            <input type="number" className="form-control"
                                value={quantity} 
                                onChange={(e) => setQuantity(e.target.value)}
                                min={1} required/>

                            <label>Price</label>
                            <input type="number" className="form-control"
                                value={price} required onChange={(e) =>setPrice(e.target.value) } />

                        </div>
                        <br />
                        <div>
                            <button className="btn btn-success btn-block">Place Order</button>
                        </div>
                    </div>

                </form>
            </div>

            <div id="prevOrders">
                <hr />
                <h2>Previous Orders</h2>
                <hr />
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Order ID</th>
                            <th scope="col">Food Item</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                            <th scope="col">Ordered by</th>
                        </tr>
                    </thead>
                    {orderListContent}
                </table>
            </div>
        </div>

    )
}
