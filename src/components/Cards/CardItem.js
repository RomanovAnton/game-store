import React from "react";
import Button from "./Button";
import CardGenre from "./CardGenre";

export default function CardItem({ card }) {
  return card ? (
    <div className="card-item">
      <img className="card-item__image" src={card.image} alt={card.name}></img>
      <div className="card-item__title">{card.title}</div>
      <div className="card-item__genres">
        {card.genres.map((genre) => (
          <CardGenre key={genre} genre={genre} />
        ))}
      </div>

      <div className="card-item__buy">
        <span>{card.price} руб.</span>
        <Button type={"primary"} size={"s"} onClick={() => null}>
          В корзину
        </Button>
      </div>
    </div>
  ) : (
    "404"
  );
}
