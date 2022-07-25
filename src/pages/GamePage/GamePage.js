import React from "react";
import { useSelector } from "react-redux/es/exports";
import CardBuy from "../../components/Cards/CardBuy";

export default function GamePage() {
  const currentGame = useSelector((state) => state.game.currentGame);
  if (!currentGame) {
    return;
  }

  return (
    <div className="game-page">
      <h1 className="game-page__title">{currentGame.title}</h1>
      <div className="game-page__container">
        <div className="game-page__video-block">
          <iframe
            title="game-video"
            src={currentGame.video}
            width="90%"
            height="400px"
            frameBorder="0"
          ></iframe>
        </div>
        <div className="game-page__caption-block">
          <img
            className="caption-block__image"
            src={currentGame.image}
            alt={currentGame.title}
          ></img>
          <p className="caption-block__description">
            {currentGame.description}
          </p>
          <p className="caption-block__mark">
            Популярные метки для этого продукта
          </p>
          <CardBuy card={currentGame} />
        </div>
      </div>
    </div>
  );
}
