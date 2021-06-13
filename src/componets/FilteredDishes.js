import React, { useState } from "react";
import Pagination from "./Pagination";

function FilteredDishes(props) {
  console.log("Single Dish Props :", props.singleDish);

  let [allMenus, setAllMenus] = useState(props.allMenus);
  let [filteredDishes, setFilteredDishes] = useState([]);
  let [activeDish, setActiveDish] = useState("Beef");
  let [currentPage, setCurrentPage] = useState(1);
  let [itemPerPage, setItemPage] = useState(4);

  let indexOfLastDish = currentPage * itemPerPage;
    //1 x 4  =4
    //2 x 4  =8
    //3 x 4  =12
  let indexOfFirstDish = indexOfLastDish - itemPerPage;
    //4 - 4 = 0
    //8 - 4 = 4
    //12 - 4 = 8

    let showTheseDishesNow = filteredDishes.slice(indexOfFirstDish,indexOfLastDish)

  //Lets Show Only Single Dishes
  let singleDishItems = props.singleDish.map((item) => {
    return (
      <li>
        <img src={item.strMealThumb} className="br-10" alt="" />
        <h5>{item.strMeal}</h5>
      </li>
    );
  });

  console.log("Props Data:", props.allMenuCategories);

  // Show Dishes onClick
  function showFilterdDishesHandler(category) {
    props.setSingleDish([]);
    setActiveDish(category);
    let filteredDishesAre = allMenus
      .filter((item) => {
        return item.strCategory === category;
      })
      .map((item) => {
        return (
          <li>
            <img src={item.strMealThumb} className="br-10" alt="" />
            <h5>{item.strMeal}</h5>
          </li>
        );
      });

    setFilteredDishes(filteredDishesAre);
  }

  // Lets Show all The Categories
  let allCategories = props.allMenuCategories.map((item) => {
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
            {(filteredDishes.length != singleDishItems.length) != 0 ? (
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
          itemPerPage ={itemPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        ></Pagination>
      </div>
    </div>
  );
}

export default FilteredDishes;
