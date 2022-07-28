import Button from "../Button";
import { useHistory } from "react-router-dom";

export default function CartMenu({ itemsInCart, totalSum }) {
  const history = useHistory();
  const handleBtnClick = () => {
    history.push("/order");
  };

  return (
    <>
      <ul className="game-list">
        {itemsInCart.length > 0 ? (
          itemsInCart.map((item) => {
            return (
              <li className="game-list__item" key={item.id}>
                <span>{item.title}</span>
                <span>{item.price} руб.</span>
              </li>
            );
          })
        ) : (
          <span>Корзина пуста</span>
        )}
      </ul>
      <div className="total-price">
        <span>Итого:</span>
        <span>{totalSum}руб.</span>
      </div>
      <Button
        type={"primary"}
        size={"m"}
        text={"Оформить заказ"}
        onClick={handleBtnClick}
        disabled={itemsInCart.length === 0 ? "true" : "false"}
      />
    </>
  );
}
