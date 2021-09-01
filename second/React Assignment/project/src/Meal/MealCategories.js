import React from 'react'

import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import MealSeaFood from './MealSeaFood';
import './mealHome.css'
import MealCategoryFood from './MealCategoryFood';

export default function MealCategories() {
    const [mealCategoryData, setMealCategoryData] = useState();
    const [categoryDisplay, setcategoryDisplay] = useState(true);
    const [categoryContent, setCategoryContent] = useState();
    
    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php').then((res) => {
            console.log(res.data.categories);
            setMealCategoryData(res.data.categories);
            setcategoryDisplay(true);

        }).catch(error => { console.log(error) })

    }, [])

    function onClickHandle(categoryName) {
        setcategoryDisplay(false)
        let content = <MealCategoryFood category={categoryName} />
        setCategoryContent(content);

    }

    const contentInit = mealCategoryData?.map((item) => {
        return (
            <div key={item.idCategory}  >
                <div onClick={() => onClickHandle(item.strCategory)}>
                    <div className="card" style={{ height: '15rem', width: '15rem' }}>
                        <img className="card-img-top" src={item.strCategoryThumb}
                        style={{ width: "100%" }}
                        dataToggle='tooltip' title={item.strCategoryDescription}
                        dataPlacement="bottom"></img>
                        <br/><hr/>
                        <h3 className="card-title font-weight-bold text-center" style={{ fontSize: '20px' }} >{item.strCategory}</h3>
                    </div>
                </div>
                <hr />

            </div>
            

        )
    })

    if (categoryDisplay == true) {
        return <div className="text-center">
            <div className="card-deck">
                {contentInit}
            </div>
        </div>
    }
    else{
        return <div className="justify-content-center">
        <div className="card-deck">
            {categoryContent}
        </div>
    </div>
    }

    
}
