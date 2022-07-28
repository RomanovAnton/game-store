import React from "react";
import { useSelector } from "react-redux";
import calkTotalSum from "../../utils/utils";

export default function OrderDescription() {
  const itemsInCart = useSelector((store) => store.cart.itemsInCart);
  const totalSum = calkTotalSum(itemsInCart);

  return (
    <span className="order-page__order-description">
      {`${itemsInCart.length} товара на сумму ${totalSum} руб.`}
    </span>
  );
}
