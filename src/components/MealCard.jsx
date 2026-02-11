import React from 'react'
import {Link} from "react-router-dom";

const MealCard = ({meal}) => {
  return (
    <div>
      <Link>
        <img src={meal.strMealThumb}/>
      </Link>
    </div>
  )
}

export default MealCard