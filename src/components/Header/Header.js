import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  return (
    <div className="header">
      <Link to="/" className="header__link">
        Game Store
      </Link>
      <FaShoppingCart style={{ margin: "0" }} color="white" size={20} />
    </div>
  );
}
