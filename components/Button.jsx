"use client";

import React from "react";

const Button = ({ text, buttonStyles, handleClick, type, status }) => {
  return (
    <button
      type={`${type}`}
      className={`${buttonStyles}`}
      onClick={handleClick}
    >
      <span className="flex-1">{text}</span>
    </button>
  );
};

export default Button;
