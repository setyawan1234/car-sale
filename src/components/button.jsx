import React from "react";

export const Button = (props) => {
  const { label, bgColor, color } = props;
  const buttonStyle = {
    backgroundColor: bgColor,
    color: color,
  };
  return (
    <button
      className="rounded-md border-[#FF7A00] lg:px-8 lg:py-2 px-4 py-1 border-2 font-poppins lg:text-[16px] text-[14px] cursor-pointer"
      style={buttonStyle}
    >
      {label}
    </button>
  );
};

export const Button2 = (props) => {
  const { label, bgColor, color, borderColor, onClick, type } = props;
  const buttonStyle = {
    backgroundColor: bgColor,
    color: color,
    border: `1px solid ${borderColor}`,
  };

  return (
    <>
      <button
        className="rounded-lg px-4 py-2 text-[14px]"
        onClick={onClick}
        type={type}
        style={buttonStyle}
      >
        {label}
      </button>
    </>
  );
};
