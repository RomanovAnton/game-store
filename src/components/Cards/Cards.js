import React from "react";
import cards from "../../utils/server-data";
import CardItem from "./CardItem";

export default function Cards() {
  return (
    <div className="cards">
      {cards.map((card) => (
        <CardItem key={card.id} card={card} />
      ))}
    </div>
  );
}
