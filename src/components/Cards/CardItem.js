import React from "react";
import Button from "./Button";
import CardGenre from "./CardGenre";
import { addItemInCart, removeItemFromCart } from "../../store/cart/reducer";
import { useDispatch, useSelector } from "react-redux/es/exports";

export default function CardItem({ card }) {
  const dispatch = useDispatch();
  const itemsInCart = useSelector((state) => state.cart.itemsInCart);
  const isItemInCart = itemsInCart.some((item) => item.id === card.id);

  const handleCartClick = () => {
    if (isItemInCart) {
      dispatch(removeItemFromCart(card.id));
    } else {
      dispatch(addItemInCart(card));
    }
  };
  return (
    <>
      {card ? (
        <div className="card-item">
          <img
            className="card-item__image"
            src={card.image}
            alt={card.name}
          ></img>
          <div className="card-item__title">{card.title}</div>
          <div className="card-item__genres">
            {card.genres.map((genre) => (
              <CardGenre key={genre} genre={genre} />
            ))}
          </div>

          <div className="card-item__buy">
            <span>{card.price} руб.</span>
            <Button
              type={isItemInCart ? "secondary" : "primary"}
              size={"s"}
              onClick={handleCartClick}
              text={isItemInCart ? "Убрать из корзины" : "В корзину"}
            ></Button>
          </div>
        </div>
      ) : (
        "404"
      )}
    </>
  );
}
