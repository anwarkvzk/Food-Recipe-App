import React from "react";

function Pagination(props) {
  let numberOfPages = [];
  for (let i = 1; i <= Math.ceil(props.filteredDishes.length/props.itemPerPage); i++) {
    numberOfPages.push(i);
  }
  let pages = numberOfPages.map((item) => {
    return <li>{item}</li>;
  });
  return (
    <section>
      <ul className="pagination flex">{pages}</ul>
    </section>
  );
}

export default Pagination;
