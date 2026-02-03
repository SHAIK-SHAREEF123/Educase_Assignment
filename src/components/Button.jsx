import React from "react";

const Button = ({
  children,
  onClick,
  disabled = false,

  bgColor = "bg-[#6C25FF]",
  hoverColor = "hover:bg-[#5a1ee0]",
  disabledBg = "bg-gray-300",
  textColor = "text-white",

  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        w-full
        py-3
        rounded-md
        font-semibold
        ${textColor}
        ${disabled ? disabledBg : `${bgColor} ${hoverColor}`}
        ${disabled ? "cursor-not-allowed" : ""}
        transition
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
