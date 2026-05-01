import Image from 'next/image';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const SignUpPage = () => {
    return (
        <div>
 <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-orange-500 to-orange-300">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-96">
        <h2 className="text-2xl font-bold text-center mb-4 text-orange-500">
          Create Account 🌞
        </h2>

        <form  className="space-y-2">

            <p>Email</p>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg focus:outline-orange-400"
          />

            <p>Password</p>

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg focus:outline-orange-400"
          />

                      <p>Photo URL</p>

          <input
            type="text"
            placeholder="Photo URL"
            className="w-full p-3 border rounded-lg focus:outline-orange-400"
          />

          <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
            Register
          </button>
        </form>

        <div className="mt-4 text-center text-gray-500">OR</div>

        <button
          className="w-full mt-4 border py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100"
        >
         <FcGoogle />

          Sign up with Google
        </button>
      </div>
    </div>        </div>
    );
};

export default SignUpPage;