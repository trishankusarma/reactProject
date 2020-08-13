import React,{useState,useEffect} from 'react';
import Recipe from "./recipe";
import "./recipe.css";

const App=()=>{
  const API_ID="0167efed";
  const API_KEY="c5a1155eb69ab6ba825165939f3e323d";
  const [recipes,setRecipes]=useState([]);
  const [search,setSearch]=useState("banana");
  const [query,setQuery]=useState("banana");

  useEffect(()=>{
      getRecipe();
  },[query]);
  
  const useUpdateSearch=(e)=>{
    setSearch(e.target.value);
  }

  const getSearch=(e)=>{
    e.preventDefault();
    setQuery(search);
  }


  const getRecipe=async ()=>{
  const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`);
    const data=await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  return(
    <div>
      <form onSubmit={getSearch} className="form" >
        <input type="text" value={search} onChange={useUpdateSearch} className="form_Input"/>
        <button type="submit" class_Name="form_search">Search</button>
      </form>
      {recipes.map(recipe=>(
          <Recipe key={recipe.recipe.label}
                  title={recipe.recipe.label}
                  image = {recipe.recipe.image}
                  calories={recipe.recipe.calories}
                  ingredients={recipe.recipe.ingredients}
          />         
      ))}
    </div>
  )
}
export default App;
