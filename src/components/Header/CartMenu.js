import React from "react";
import Button from "../Button";
export default function CartMenu() {
  const handleBtnClick = () => {
    console.log("оформить заказ!");
  };
  return (
    <>
      <ul className="game-list">
        <li className="game-list__item">
          <span>Game 1</span>
          <span>1500 руб.</span>
        </li>
        <li className="game-list__item">
          <span>Game 1</span>
          <span>1500 руб.</span>
        </li>
      </ul>
      <div className="total-price">
        <span>Итого:</span>
        <span>3000 руб.</span>
      </div>
      <Button
        type={"primary"}
        size={"m"}
        text={"Оформить заказ"}
        onClick={handleBtnClick}
      />
    </>
  );
}
