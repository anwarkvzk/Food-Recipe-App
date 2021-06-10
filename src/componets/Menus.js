import React, { useState, useEffect } from "react";
import FilteredDishes from "./FilteredDishes";
import Hero from "./Hero";
import Loader from "./Loader";
import SpecialDishes from "./SpeacialDishes";

function Menus() {
  let [menu, setMenu] = useState([]);
  let [menuCategory, setMenuCategory] = useState([]);
  let [loading, setLoading] = useState(true);

  // get all the menus
  async function getAllTheMenus() {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
    let response = await fetch(API_URL);
    let data = await response.json();
    setMenu(data.meals);
    setLoading(false);
  }

  async function getAllTheCategories() {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
    let response = await fetch(API_URL);
    let categoryData = await response.json();
    setMenuCategory(categoryData.categories);
  }

  useEffect(() => {
    getAllTheMenus();
    getAllTheCategories();
  }, []);

  // console.log("The Menus are",menu);

  //    return(
  //        <div>
  //        <img src={item.strMealThumb} />
  //         <h2>{item.strCategory}</h2>
  //         </div>
  //    )
  // })

  return (
    <div>
      <Hero />
      {!loading ? (
        <SpecialDishes specialMenu={menu} />
      ) : (
       <Loader />
      )}
      {!loading ? (
        <FilteredDishes allMenuCategories={menuCategory} allMenus={menu} />
      ) : null}
    </div>
  );
}
export default Menus;
