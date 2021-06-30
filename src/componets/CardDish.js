import React from "react";

function CardDish(props) {
    
  return (
    <li>
      <a href="javaScript:;" onClick={props.showPopup}>
        <img className="img" src={props.menuItem.strMealThumb} />
        <h5>{props.menuItem.strMeal}</h5>
        {/* <img src={item.strMealThumb} className="br-10" alt="" />
            <h5>{item.strMeal}</h5> */}
      </a>
    </li>
  );
}

export default CardDish;
