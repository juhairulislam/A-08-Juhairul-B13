'use client'
import Image from 'next/image';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { authClient } from "@/lib/auth-client"; //import the auth client
import { toast } from 'react-toastify';
import Link from 'next/link';

const LoginPage = () => {

  const handleSubmit = async (e) => {

    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // console.log({email , password})

    const { data, error } = await authClient.signIn.email({

      email,
      password,
      callbackURL: "/",


    })

    console.log({ data, error })

    if (data) {
      toast.success("Log In Successful !");
    }

    if (error) {
      toast.error(error.message);
    }

  }


  const handleLogIn = async () => {
  await authClient.signIn.social({
    provider: "google",
  });
};


  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-orange-500 to-orange-300">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
          <h2 className="text-2xl font-bold text-center mb-6 text-orange-500">
            SunCart Login ☀️
          </h2>

          <form className="space-y-3" onSubmit={handleSubmit}>

            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full p-3 border rounded-lg focus:outline-orange-400"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                required
                className="w-full p-3 border rounded-lg focus:outline-orange-400"
              />
            </div>

            <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
              Login
            </button>
          </form>

                     <div className='text-center my-4 text-md'>
                       <Link  href={'/signup'}>Don't have an account? <span className='text-red-500'>Register</span> </Link>
                     </div>


          <div className="text-center text-gray-500">OR</div>

          <button
          onClick={handleLogIn}
            className="w-full mt-2 border py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100"
          >

            <FcGoogle />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;