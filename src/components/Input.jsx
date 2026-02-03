import React from "react";

const Input = ({
  label,
  type = "text",
  placeholder = "",
  required = false,

  labelColor = "text-[#6C25FF]",
  placeholderColor = "placeholder:text-gray-400",
  borderColor = "border-gray-300",
  focusBorderColor = "focus:border-[#6C25FF]",
  className = "",
}) => {
  return (
    <div className="relative mb-4">
      {/* 🔹 Floating Label */}
      {label && (
        <label
          className={`
            absolute
            -top-2.5
            left-3
            px-1
            text-sm
            bg-white
            ${labelColor}
          `}
        >
          {label}
          {required && <span className="text-red-500"> *</span>}
        </label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        className={`
          w-full
          p-3
          border
          rounded-md
          ${borderColor}
          ${focusBorderColor}
          ${placeholderColor}
          focus:outline-none
          ${className}
        `}
      />
    </div>
  );
};

export default Input;
