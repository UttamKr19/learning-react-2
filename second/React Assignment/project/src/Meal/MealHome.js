import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import './mealHome.css'
import MealOrder from './MealOrder';
export default function MealHome() {

    const [specialFoodData, setSpecialFoodData] = useState();
    const [displayContent, setDisplayContent] = useState('meal');

    useEffect(() => {
        let url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken`
        console.log(url);
        axios.get(url).then((res) => {
            let foodData = res.data.meals.slice(8, 11);
            setSpecialFoodData(foodData);

        }).catch(error => { console.log(error) })

    }, [])

    const specialContent = specialFoodData?.map((item) => {
        return (
            <div>
                <div className="card" style={{ height: '30%', width: '200px' }}>
                    <img className="card-img-top" src={item.strMealThumb}
                        alt="Card image cap" />
                    <div className="card-block">
                        <h4 className="card-title">{item.strMeal}</h4>
                        <button onClick={orderClick} className="btn btn-danger btn-block card-text">Order Now</button>
                    </div>
                </div>
            </div>
        )
    })

    function orderClick() {
        setDisplayContent('order');
    }

    function backButton() {
        setDisplayContent('meal')
    }


    if (displayContent == 'order') {
        return <MealOrder backButton={backButton} />
    }


    return (
        <div id="mealHome">
            <h1 className="text-center">Osteria</h1>

            <div>

                <div style={{ height: '25vh' }}>
                    <div id="homeTexts">
                        <p> <b>Osteria</b> is an extravagant version of a Milanese Trattoria. The textured gold walls and bronze pendants create a decadent atmosphere in which you can enjoy the vibrant and colourful cuisine of our famous chef Ivan Simeoli.

                            Mixing Italian traditions with innovative techniques, Osteria 60 is a new addition to modern Italian cuisine.</p>
                    </div>
                </div>
                <div className="container-fluid">
                <h3>Today's Special</h3>
                <div className="card-deck" style={{ width: '100%' }}>
                    {specialContent}
                </div>
                </div>
                

            </div>
        </div>

    )
}
