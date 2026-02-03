import React from "react";
import MobileLayout from "../layout/MobileLayout";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <MobileLayout>
      <div className="h-full flex flex-col justify-between p-6">

        <div>
          <h1 className="text-3xl font-bold mb-6">
            Create your <br /> PopX account
          </h1>

          <Input label="Full Name" placeholder="Enter your full name" labelColor="text-purple-700" required />
          <Input label="Phone number" placeholder="Enter phone number" labelColor="text-purple-700" required />
          <Input label="Email address" placeholder="Enter email address" labelColor="text-purple-700" required />
          <Input
            label="Password"
            labelColor="text-purple-700"
            type="password"
            placeholder="Enter password"
            required
          />
          <Input label="Company name" placeholder="Enter company name" labelColor="text-purple-700" />

          <div className="mt-3">
            <p className="text-sm font-medium mb-2">
              Are you an Agency? <span className="text-red-500">*</span>
            </p>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 text-sm">
                <input type="radio" name="agency" className="accent-[#6C25FF]" />
                Yes
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input type="radio" name="agency" className="accent-[#6C25FF]" />
                No
              </label>
            </div>
          </div>
        </div>

        <Link to="/Account">
          <Button>Create Account</Button>
        </Link>
      </div>
    </MobileLayout>
  );
};

export default Signup;
