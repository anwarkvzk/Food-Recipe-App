import React, { useState } from "react";
import CardDish from "./CardDish";
import Popup from "./Popup";

function SpecialDishes(props) {
  let [showPopUp, setShowPopup] = useState(false);

  //Lets show the Popup
  function showPopupHandler(){
    setShowPopup(true)
   }

   //Lets Close the Popup Window

   function closePopupHandler(){
    setShowPopup(false)
  }


  let maxSpecialDishes = 8;
  let specialMenus = props.specialMenu.map((menuItem, index) => {
    if (index < maxSpecialDishes) {
      return <CardDish 
      menuItem={menuItem}
      showPopup={showPopupHandler}
      />;
    }
  });
  return (
   
    <section className="special-dishes">
      {showPopUp && <Popup closePopup={closePopupHandler}></Popup>}
      <div className="container">
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
