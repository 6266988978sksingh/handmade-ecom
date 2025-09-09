import React, { useContext } from 'react'
import './foodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import Fooditem from '../foodItem/Fooditem'


const FoodDisplay = ( {category}) => {

    const {food_list}=useContext(StoreContext)
  return (
    <div className='food-diaplay' id='food-display'>
        <h2>Top Products neer you</h2>
        <div className="food-display-list">
          {food_list.map((item,index)=>{
            if(category==="All"||category===item.category){
              return <Fooditem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />

            }
                      })}
        </div>
        

      
    </div>
  )
}

export default FoodDisplay
