import React, { FC } from "react";
import "./Card.css";

interface CardProps {
  buffer?: boolean;
  first?: boolean;
  last?: boolean;
}

const Card: FC<CardProps> = ({ buffer, first, last }) => {
  return (
    <div
      className={`Card ${
        buffer ? "Buffer" : first ? "First" : last ? "Last" : ""
      }`}
    ></div>
  );
};

export default Card;
