import React from "react";
import MobileLayout from "../layout/MobileLayout";
import Input from "../components/Input";
import Button from "../components/Button";

const Login = () => {
  return (
    <MobileLayout>
      <div className="h-full flex flex-col justify-between p-6">

        <div>
          <h1 className="text-2xl font-extrabold">
            Signin to your <br /> PopX account
          </h1>

          <p className="text-gray-500 mt-3 mb-6 text-sm text-bold">
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
          </p>

          <Input
            label="Email Address"
            labelColor="text-purple-700"
            placeholder="Enter email address"
            placeholderColor="placeholder:text-gray-300"
          />

          <Input
            label="Password"
            labelColor="text-purple-700"
            type="password"
            placeholder="Enter password"
          />
          <Button disabled>Login</Button>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Login;
