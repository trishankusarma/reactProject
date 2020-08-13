import  React from "react";
import "./recipe.css";

const Recipe=({title,image,calories,ingredients})=>{
   return(
       <div className="dish_bar">
           <h3 className="dish_title"><b>DishName:</b> {title}</h3>
           <img src={image} alt="khana khajana" className="dish_img"/>
           <p className="dish_calories"><b>Calories:</b> {calories}</p>
           <ol class="dish_incredient"><b>List of ingredients: </b><br/>
               {ingredients.map(ingredient=>(
            <ul>   
               <li><b>Name: </b>{ingredient.text}</li>
               <li><b>Weight: </b>{ingredient.weight} <b> g</b></li>
            </ul>
               ))}
           </ol>
       </div>
   )
}

export default Recipe; 