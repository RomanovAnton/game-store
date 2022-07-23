import React from "react";
import { Link } from "react-router-dom";
import CartBlock from "./Cart-block";

export default function Header() {
  return (
    <div className="header">
      <Link to="/" className="header__link">
        Game Store
      </Link>
      <div className="cart-block">
        <CartBlock />
      </div>
    </div>
  );
}
