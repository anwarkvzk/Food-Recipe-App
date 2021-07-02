import React, { useState, useEffect } from "react";
import FilteredDishes from "./FilteredDishes";
import Header from "./Header";
import Hero from "./Hero";

import SpecialDishes from "./SpeacialDishes";
import {AllMenus} from "./AllMenuContext";

function Menus() {
  let [menuCategory, setMenuCategory] = useState([]);
  let [singleDish, setSingleDish] = useState([]);

  //Get all The Categories
  async function getAllTheCategories() {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
    let response = await fetch(API_URL);
    let categoryData = await response.json();
    setMenuCategory(categoryData.categories);
  }

  async function getOnlyOneDish() {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef";
    let response = await fetch(API_URL);
    let singleDishData = await response.json();
    setSingleDish(singleDishData.meals);
  }

  useEffect(() => {
    getAllTheCategories();
    getOnlyOneDish();
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
      <Header />
      <Hero />
      <AllMenus>
        <SpecialDishes />

        <FilteredDishes
          allMenuCategories={menuCategory}
          singleDish={singleDish}
          setSingleDish={setSingleDish}
        />
      </AllMenus>
    </div>
  );
}
export default Menus;
