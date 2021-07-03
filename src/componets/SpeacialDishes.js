import React, { useContext, useState } from "react";
import CardDish from "./CardDish";
import Popup from "./Popup";
import AddToCart from "./AddToCart";

import { AllMenuContext } from "./AllMenuContext";

function SpecialDishes(props) {
  let [showPopUp, setShowPopup] = useState(false);
  let [currentDish, setCurrentDish] = useState("");
  let [addToCartItem, setAddToCartItem ]=useState([])

  console.log("this is addToCart Item")
  const allMenus = useContext(AllMenuContext);
  console.log("Global State Menus are here now:", allMenus);
  //Lets show the Popup
  function showPopupHandler(dishName) {
    setShowPopup(true);
    setCurrentDish(dishName);
  }

  //Lets Close the Popup Window

  function closePopupHandler() {
    setShowPopup(false);
  }

  //Add to Cart handler
  function addToCartHandler(AddToCartImg,AddToCartTitle) {
    setAddToCartItem(
      [
        ...addToCartItem,
        {
          "img" : AddToCartImg,
          "title":AddToCartTitle
        }
      ]
    )
  }
  

  let maxSpecialDishes = 8;
  let specialMenus = allMenus.map((menuItem, index) => {
    if (index < maxSpecialDishes) {
      return <CardDish menuItem={menuItem} showPopup={showPopupHandler} />;
    }
  });
  return (
    <section className="special-dishes">
      {showPopUp && (
        <Popup
          closePopup={closePopupHandler}
          currentDish={currentDish}
          addToCartHandler={addToCartHandler}
        ></Popup>
      )}

      <div className="container">
        <AddToCart addToCartItem={addToCartItem}/>

        <div className="special-dishes-content text-center">
          <h2>Our Special Dishes</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            cumque dolorum, nemo iure tenetur quam quibusdam voluptas laudantium
            sed et alias, quis totam non voluptatibus.
          </p>
        </div>
        <div className="special-dishes-list">
          <ul className="flex flex-wrap gap-30">{specialMenus}</ul>
        </div>
      </div>
    </section>
  );
}

export default SpecialDishes;
