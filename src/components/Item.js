import React, {useState} from "react";


function Item({ name, category}) {
  const [inCart, setInCart] = useState("in-cart")

  function handleClick() {
    setInCart(!inCart)
  }
  

  return (
    <li className={inCart ? "":"in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={() => handleClick()}>{inCart ? "Add to Cart":"Remove from cart"}</button>
    </li>
  );
}

export default Item;
