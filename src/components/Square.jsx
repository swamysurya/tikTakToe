import { useState } from "react";

const Square = ({ value, onSquareClick }) => {
  return (
    <button className="box" onClick={onSquareClick}>
      {value}
    </button>
  );
};

export default Square;
