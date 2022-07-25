import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { setCurrentGame } from "../../store/game/reducer";
import CardGenres from "./CardGenres";
import CardBuy from "./CardBuy";

export default function CardItem({ card }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleCardClick = () => {
    dispatch(setCurrentGame(card));
    history.push(`/card/${card.title}`);
  };

  return (
    <>
      {card ? (
        <div className="card-item">
          <img
            className="card-item__image"
            src={card.image}
            alt={card.name}
            onClick={handleCardClick}
          ></img>
          <div className="card-item__title">{card.title}</div>
          <CardGenres genres={card.genres} />
          <CardBuy card={card} />
        </div>
      ) : (
        "404"
      )}
    </>
  );
}
