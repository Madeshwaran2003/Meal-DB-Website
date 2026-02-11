import React from "react";
import {useState,useEffect} from "react";
import {useParams} from "react-router-dom";
import {fetchMealsByCategory} from "../api/mealdb";
import LoadingSpinner from "../components/LoadingSpinner"
import MealCard from "../components/MealCard";

const  CategoryMeals=()=>{
    const {category}=useParams();
    const [meals,setMeals]=useState([]);
    const[loading,setLoading]=useState(true);
    useEffect(()=>{
        setLoading(true);
        fetchMealsByCategory(category).then((res)=>setMeals(
            res.data.meals||[])).catch((err)=>console.log(err)).finally(()=>setLoading(false));
    },[category])
    if(loading) return <LoadingSpinner/>;
    return( 
        <div className="bg-orange-500 py-8">
            <h1 className="text-center text-white text-4xl font-bold tracking-wide">{category} meals</h1>
            {meals.length===0?(<p>No Meals found</p>):(
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                   {meals.map((meal)=>(
                        <MealCard key={meal.idMeal} meal={meal}/>
                   ))}
                </div>
            )}
        </div>
        
        );
};

export default CategoryMeals;