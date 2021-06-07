import React from "react";

function FilteredDishes(props) {
    // Lets Show all The Categories
  console.log("Props Data:",props.allMenuCategories);


 let allCategories = props.allMenuCategories.map((item)=>{
    return(
      <li>{item.strCategory}</li>
    )
  })


  return (
    <div className="filtred-dishes">
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
          <ul>
              {allCategories}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FilteredDishes;
