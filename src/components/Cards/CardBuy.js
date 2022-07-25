import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { addItemInCart, removeItemFromCart } from "../../store/cart/reducer";
import Button from "../../components/Button";

export default function CardBuy({ card }) {
  const itemsInCart = useSelector((state) => state.cart.itemsInCart);
  const dispatch = useDispatch();
  const isItemInCart = itemsInCart.some((item) => item.id === card.id);
  
  console.log(card)
  if (!card) {
    return;
  }

  const handleCardBtnClick = () => {
    if (isItemInCart) {
      dispatch(removeItemFromCart(card.id));
    } else {
      dispatch(addItemInCart(card));
    }
  };
  return (
    <div className="card-item__buy">
      <span>{card.price} руб.</span>
      <Button
        type={isItemInCart ? "secondary" : "primary"}
        size={"s"}
        onClick={handleCardBtnClick}
        text={isItemInCart ? "Убрать из корзины" : "В корзину"}
      ></Button>
    </div>
  );
}
