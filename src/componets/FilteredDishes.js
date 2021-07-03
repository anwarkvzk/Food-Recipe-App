import React, { useState, useContext, useEffect } from "react";
import CardDish from "./CardDish";
import Pagination from "./Pagination";
import { AllMenuContext } from "./AllMenuContext";

function FilteredDishes(props) {
  let [menuCategory, setMenuCategory] = useState([]);
  let [singleDish, setSingleDish] = useState([]);
  let allMenus = useContext(AllMenuContext);

  let [filteredDishes, setFilteredDishes] = useState([]);
  let [activeDish, setActiveDish] = useState("Beef");
  let [currentPage, setCurrentPage] = useState(1);
  let [itemPerPage, setItemPage] = useState(4);

  let indexOfLastDish = currentPage * itemPerPage;

  let indexOfFirstDish = indexOfLastDish - itemPerPage;

  let showTheseDishesNow = filteredDishes.slice(
    indexOfFirstDish,
    indexOfLastDish
  );

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

  //Lets Show Only Single Dishes
  let maxItem = 4;
  let singleDishItems = singleDish.map((item, index) => {
    if (index < maxItem) {
      return (
        <li>
          <img src={item.strMealThumb} className="br-10" alt="" />
          <h5>{item.strMeal}</h5>
        </li>
      );
    }
  });

  console.log("Props Data:", props.allMenuCategories);

  // Show Dishes onClick
  function showFilterdDishesHandler(category) {
    setSingleDish([]);
    setActiveDish(category);
    let filteredDishesAre = allMenus
      .filter((item) => {
        return item.strCategory === category;
      })
      .map((menuItem) => {
        return (
          <CardDish menuItem={menuItem} />
          // <li>
          //   <img src={item.strMealThumb} className="br-10" alt="" />
          //   <h5>{item.strMeal}</h5>
          // </li>
        );
      });

    setFilteredDishes(filteredDishesAre);
  }

  // Lets Show all The Categories
  let allCategories = menuCategory.map((item) => {
    return (
      <li
        className={item.strCategory == activeDish ? "active" : ""}
        onClick={() => {
          showFilterdDishesHandler(item.strCategory);
        }}
      >
        {item.strCategory}
      </li>
    );
  });

  // Rendering
  return (
    <div className="Filtred-dishes">
      <div className="container">
        <div className="text-center">
          <h2>Choose Your dishes</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos amet neque laboriosam id! Illum nihil laboriosam
            perferendis quasi, eaque laborum facilis corrupti eius suscipit
            officia aspernatur deserunt, iusto repellendus autem!
          </p>
        </div>
        <div className="filterd-dishes">
          <ul className="flex flex-wrap flex-center">{allCategories}</ul>
        </div>

        <div className="filterd-dishes-results">
          <ul className="flex flex-wrap gap-30">
            {singleDishItems}
            {singleDishItems != 0 || filteredDishes.length != 0 ? (
              showTheseDishesNow
            ) : (
              <div className="alert">
                <h3>Sorry Item Not Found</h3>
                <h4>Please Choose Another Dishes</h4>
              </div>
            )}
          </ul>
        </div>
        <Pagination
          filteredDishes={filteredDishes}
          itemPerPage={itemPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        ></Pagination>
      </div>
    </div>
  );
}

export default FilteredDishes;
