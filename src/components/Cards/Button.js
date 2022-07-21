import React from "react";
import classNames from "classnames"; // позволяет объединить условия в объект и не писать условыную конструкцию

export default function Button({ type, size, onClick }) {
  const btnClass = classNames({
    "btn": true,
    "btn-primary": type === "primary",
    "btn-secondary": type === "secondary",
    "btn-medium": size === "m",
    "btn-small": size === "s",
  });

  return (
    <button className={btnClass} onClick={onClick}>
      в корзину
    </button>
  );
}
