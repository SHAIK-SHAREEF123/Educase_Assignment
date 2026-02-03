import React from "react";

const MobileLayout = ({ children, className = "" }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-[375px] h-[667px] bg-white border border-gray-200 rounded-xl shadow-sm">
        {children}
      </div>
    </div>
  );
};

export default MobileLayout;
