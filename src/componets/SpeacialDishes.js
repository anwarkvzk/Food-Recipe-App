function SpecialDishes(props) {
    console.log("props :",props.specialMenu);
    let specialMenus = props.specialMenu.map((menuItem)=>{
        return(
            <ul>
                <li>
                    <img src={menuItem.strMealThumb} />
                    <h4>{menuItem.strMeal}</h4>
                    
                    </li>
            </ul>
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
               {specialMenus}
        </div>
      </div>
    </section>
  );
}

export default SpecialDishes;
