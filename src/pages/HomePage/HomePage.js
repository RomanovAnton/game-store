import React from "react";
import cards from "../../utils/server-data";
import CardItem from "../../components/Cards/CardItem";

export default function HomePage() {
  return (
    <div className="home-page">
      {cards.map((card) => (
        <CardItem key={card.id} card={card} />
      ))}
    </div>
  );
}
