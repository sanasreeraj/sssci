import React from "react";

const Signup = () => {
  return (
    <div>
      <div className="bg-[#F9EFDB] min-h-screen flex items-center justify-center">
        <div className="bg-[#F9EFDB] p-8 rounded-lg shadow-md w-full max-w-md">
          <img
            src="/company-logo.png"
            alt="Company Logo"
            className="mx-auto mb-4"
          />

          {/* Form */}
          <form>
            {/* Form fields */}
            <div className="mb-4">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-600"
              >
                Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-600"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-600"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            {/* OR Option */}
            <div className="mb-4">
              <div className="flex items-center">
                <div className="border-b border-gray-300 flex-grow mr-4"></div>
                <span className="text-sm font-medium text-gray-600">
                  OR
                </span>
                <div className="border-b border-gray-300 flex-grow ml-4"></div>
              </div>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full mb-4  bg-blue-300 m text-white p-2 rounded-md hover:bg-blue-600"
            >
              Continue with Google
            </button>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;