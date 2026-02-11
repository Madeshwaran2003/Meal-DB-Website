import React from 'react'
import LoadingSpinner from "../components/LoadingSpinner"
import {useState,useEffect} from 'react';
import { fetchCategories } from '../api/mealdb';
import {Link} from "react-router-dom";

const Home = () => {
  const[categories,setCategories]=useState([]);
  const[loading,setLoading]=useState(true);
  useEffect(()=>{
    fetchCategories()
    .then((res)=>setCategories(res.data.categories))
    .catch((err)=>console.log(err))
    .finally(()=>{
      setLoading(false);
    })
  },[]);

  if(loading) return <LoadingSpinner/>;
  
  return (
    <div className="w-full  mx-auto p-3 bg-[#fdfbd4] ">
      
      <div   className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 ">
        {categories.map((cat)=>(
          <Link to={`/category/${cat.strCategory}`} key={cat.idCategory} className="border-2 border-[#ff7900]  hover:border-[#c05800] hover:border-3 rounded-lg bg-black/15 backdrop-blur-xl p-2 shadow  transition cursor-pointer ">
            <img src={cat.strCategoryThumb} alt={cat.strCategory}
              className="w-full  object-cover rounded-lg "/>
              <p className="text-center bg-[#fae8b4] rounded-lg hover:bg-[#ff7900] hover:text-white">{cat.strCategory}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home