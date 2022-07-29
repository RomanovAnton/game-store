import React from "react";
import { useSelector } from "react-redux";
import OrderItem from "../../components/Order/OrderItem";
import OrderDescription from "../../components/Order/OrderDescription";

export default function OrderPage() {
  const itemsInCart = useSelector((store) => store.cart.itemsInCart);

  return (
    <>
    ORDERPAGE
      {/* {itemsInCart.length > 0 ? (
        <div className="order-page">
          <div className="order-page__game-items">
            {itemsInCart.map((item) => (
              <OrderItem key={item.id} data={item} />
            ))}
          </div>
          <OrderDescription />
        </div>
      ) : (
        <p>Корзину пуста</p>
      )} */}
    </>
  );
}
