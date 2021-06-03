import React, {useState, useEffect} from 'react';
import Hero from './Hero';
import SpecialDishes from './SpeacialDishes';

function Menus(){
    let [menu, setMenu]  = useState([])
    
    // get all the menus
    async function getAllTheMenus(){
        const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
        let response = await fetch(API_URL)
        let data  = await response.json()
        setMenu(data.meals)
    }
        console.log("All menu",menu);
    useEffect(()=>{
        getAllTheMenus()
        
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
       </div>
    );
}
export default Menus
