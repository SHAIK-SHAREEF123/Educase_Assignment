import React from "react";
import { Link } from "react-router-dom";
import MobileLayout from "../layout/MobileLayout";
import welcomeImg from "../assets/welcome.avif";

const Welcome = () => {
  return (
    <MobileLayout>
      <div className="h-full flex flex-col">

        <div className="flex justify-center pt-10">
          <img
            src={welcomeImg}
            alt="Welcome"
            className="w-auto h-auto object-contain"
          />
        </div>

        <div className="mt-auto p-6">
          <h1 className="text-2xl font-bold text-black mb-2">
            Welcome to PopX
          </h1>

          <p className="text-gray-500 mb-6">
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
          </p>

          <Link to="/signup">
            <button className="w-full bg-violet-700 text-white py-3 rounded-lg mb-3 font-semibold">
              Create Account
            </button>
          </Link>

          <Link to="/login">
            <button className="w-full bg-gray-300 text-gray-800 py-3 rounded-lg font-bold">
              Already Registered? Login
            </button>
          </Link>
        </div>

      </div>
    </MobileLayout>
  );
};

export default Welcome;
