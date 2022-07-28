import React, { useState, useEffect } from "react";
import CartMenu from "./CartMenu";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux/es/exports";

import calkTotalSum from "../../utils/utils";

function CartBlock() {
  const itemsInCart = useSelector((store) => store.cart.itemsInCart);
  const totalSum = calkTotalSum(itemsInCart);
  const [cartMenuIsOpen, setCartMenuIsOpen] = useState(false);
  const handleCartClick = () => {
    setCartMenuIsOpen(!cartMenuIsOpen);
  };

  useEffect(() => {
    if (!cartMenuIsOpen) {
      return;
    }
    const handleEsc = (evt) => {
      if (evt.key === "Escape") {
        setCartMenuIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [cartMenuIsOpen]);

  return (
    <div onClick={handleCartClick}>
      <FaShoppingCart
        style={{ margin: "0", cursor: "pointer" }}
        color="white"
        size={20}
      />
      {itemsInCart.length > 0 ? (
        <div className="cart-block__items-in-cart">{itemsInCart.length}</div>
      ) : null}
      {itemsInCart.length > 0 ? (
        <span className="cart-block__total-sum"> {totalSum}руб.</span>
      ) : null}
      {cartMenuIsOpen && (
        <div className="cart-block__menu">
          <CartMenu
            itemsInCart={itemsInCart}
            totalSum={totalSum}
            cartMenuIsOpen={cartMenuIsOpen}
          />
        </div>
      )}
    </div>
  );
}

export default CartBlock;
