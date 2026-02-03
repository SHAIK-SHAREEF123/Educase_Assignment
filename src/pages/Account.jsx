import React from "react";
import MobileLayout from "../layout/MobileLayout";

const Account = () => {
  return (
    <MobileLayout>
      <div className="h-full flex flex-col">

        <div className="px-4 py-4 border-b border-gray-200">
          <h2 className="text-sm font-semibold text-gray-800">
            Account Settings
          </h2>
        </div>

        <div className="px-4 py-4 flex items-center gap-4">
          <div className="relative">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="profile"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#6C25FF] rounded-full flex items-center justify-center text-white text-[10px]">
              📷
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-800">
              Marry Doe
            </h3>
            <p className="text-xs text-gray-500">
              Marry@gmail.com
            </p>
          </div>
        </div>

        <div className="px-4 text-xs text-gray-500 leading-relaxed">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
          Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </div>

        <div className="mt-auto px-4 pb-4">
          <div className="border-t border-dashed border-gray-300"></div>
        </div>

      </div>
    </MobileLayout>
  );
};

export default Account;
