import React from "react";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../store/cart/reducer";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function OrderIte({ data }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(removeItemFromCart(data.id));
  };

  return (
    <div className="order-item">
      <img className="order-item__image" src={data.image} alt={data.title} />
      <h2 className="order-item__title">{data.title}</h2>
      <span className="order-item__price">{`${data.price} руб.`}</span>
      <AiOutlineCloseCircle color="white" size={20} onClick={handleClick} />
    </div>
  );
}
