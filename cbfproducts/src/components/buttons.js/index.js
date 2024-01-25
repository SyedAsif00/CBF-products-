import React from "react";

const Button = ({ text, bg }) => {
  const buttonStyle = {
    backgroundColor: bg ? "#1c2900" : "transparent",
    color: bg ? "#fff" : "#000",
    padding: "10px 15px",
    borderRadius: "5px",
    border: "1px solid #000",
    cursor: "pointer",
    fontSize: "15px",
  };

  return <button style={buttonStyle}>{text}</button>;
};

export default Button;
