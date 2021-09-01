import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './mealHome.css'
import MealOrder from './MealOrder';

export default function MealSeaFood() {

    const [seaFoodData, setSeaFoodData] = useState();
    
    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood').then((res) => {
            // console.log(res.data);
            setSeaFoodData(res.data.meals);
        }).catch(error => { console.log(error) })

    }, [])


    const seaFoodContent = seaFoodData?.map((item) => {
        // console.log(item.strCategory)
        return (

            <div key={item.idMeal}>
                <div>
                    <div className="card" style={{ height: '28rem', width: '300px' }}>
                        <img className="card-img-top" src={item.strMealThumb} alt="Card image"
                            style={{ width: "100%" }} />
                        <div className="card-body">
                            <h4 className="card-title" style={{ fontSize: '20px' }} >{item.strMeal}</h4>
                            <Link to="/order"><button  className="btn btn-primary">Order Now</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className="card-deck text-center">
                {seaFoodContent}
            </div>
        </div>
    )
}
