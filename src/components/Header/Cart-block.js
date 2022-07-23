import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux/es/exports";
import calkTotalSum from "../../utils/utils";

function CartBlock() {
  const itemsInCart = useSelector((store) => store.cart.itemsInCart);
  const totalSum = calkTotalSum(itemsInCart);

  return (
    <>
      <FaShoppingCart style={{ margin: "0" }} color="white" size={20} />
      {itemsInCart.length > 0 ? (
        <div className="cart-block__items-in-cart">{itemsInCart.length}</div>
      ) : null}
      {itemsInCart.length > 0 ? (
        <span className="cart-block__total-sum"> {totalSum}руб.</span>
      ) : null}
      <div className="cart-block__list">
        {/* <CartList /> */}
      </div>
    </>
  );
}

export default CartBlock;
