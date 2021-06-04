function SpecialDishes(props) {
    console.log("props :",props.specialMenu);
    // let maxSpecialDishes = 10
    let specialMenus = props.specialMenu.map((menuItem)=>{
        return(
          <li>
          <img className="img" src={menuItem.strMealThumb}  />
          <h4>{menuItem.strMeal}</h4>
          </li>
        )
    })
  return (
    <section className="special-dishes">
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
               <ul className="flex flex-wrap gap-30">
                 {specialMenus}
               </ul>
        </div>
      </div>
    </section>
  );
}

export default SpecialDishes;
