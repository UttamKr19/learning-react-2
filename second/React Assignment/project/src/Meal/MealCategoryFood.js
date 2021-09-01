import React from 'react'

import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './mealHome.css'
import MealOrder from './MealOrder';
import MealFeedback from './MealFeedback';
export default function MealCategoryFood(props) {
    console.log(props)

    const [categoryFoodData, setCategoryFoodData] = useState();
   
    useEffect(() => {
        let url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=` + props.category
        console.log(url);
        axios.get(url).then((res) => {
            // console.log(res);
            console.log(res.data.meals)
            setCategoryFoodData(res.data.meals);

        }).catch(error => { console.log(error) })

    }, [])


    const categoryFoodContent = categoryFoodData?.map((item) => {
        return (
            <div key={item.idMeal}>
                <div>
                    <div className="card" style={{ height: '30rem', width: '20rem' }}>
                        <img className="card-img-top" src={item.strMealThumb}
                            style={{ width: "100%" }} />
                        <div className="card-body">
                            <h4 className="card-title" style={{ fontSize: '20px' }} >{item.strMeal}</h4>
                            <Link to="/order"><button  className="btn btn-outline-primary">Order Now</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

   

    return (
        <div className="text-center">
            <div className="card-deck">
                {categoryFoodContent}
            </div>
        </div>

    )
}
