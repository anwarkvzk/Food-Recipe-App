import React, {useState, useEffect} from 'react';
import FilteredDishes from './FilteredDishes';
import Hero from './Hero';
import SpecialDishes from './SpeacialDishes';

function Menus(){
    let [menu, setMenu]  = useState([])
    
    // get all the menus
    async function getAllTheMenus(){
        const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c"
        let response = await fetch(API_URL)
        let data  = await response.json()
        setMenu(data.meals)
    }


    async function getAllTheCategories(){
        const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php"
        let response = await fetch(API_URL)
        let categoryData = await response.json()
        console.log("Category Data:",categoryData.categories);
    }


        console.log("All menu",menu);
    useEffect(()=>{
        getAllTheMenus();
        getAllTheCategories();
    },[]);

    // console.log("The Menus are",menu);
    
    //    return(
    //        <div>
    //        <img src={item.strMealThumb} />
    //         <h2>{item.strCategory}</h2>
    //         </div>
    //    )
    // })

    return(
        <div>
            <Hero />
            <SpecialDishes specialMenu={menu} />
            <FilteredDishes />

       </div>
    );
}
export default Menus
