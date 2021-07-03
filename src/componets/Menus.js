import React, { useState, useEffect } from "react";
import FilteredDishes from "./FilteredDishes";
import Header from "./Header";
import Hero from "./Hero";

import SpecialDishes from "./SpeacialDishes";
import { AllMenus } from "./AllMenuContext";

function Menus() {
  return (
    <div>
      <Header />
      <Hero />
      <AllMenus>
        <SpecialDishes />

        <FilteredDishes />
      </AllMenus>
    </div>
  );
}
export default Menus;
