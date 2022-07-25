import React from "react";
import classNames from "classnames";
export default function Button({ type, size, onClick, text, disabled }) {
  const btnClass = classNames({
    btn: true,
    "btn-primary": type === "primary",
    "btn-secondary": type === "secondary",
    "btn-medium": size === "m",
    "btn-small": size === "s",
    "btn-disabled": disabled === "true",
  });

  return (
    <button
      className={btnClass}
      onClick={onClick}
      disabled={disabled === "true" ? true : false}
    >
      {text}
    </button>
  );
}
