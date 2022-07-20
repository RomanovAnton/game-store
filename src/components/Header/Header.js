import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  return (
    <div className="header">
      <Link to="/" className="header__link">
        Game Store
      </Link>
      <FaShoppingCart color="white" size={25} />
    </div>
  );
}
