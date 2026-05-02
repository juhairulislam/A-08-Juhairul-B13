'use client'
import Image from 'next/image';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { authClient } from "@/lib/auth-client"; //import the auth client
  import {toast } from 'react-toastify';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


const SignUpPage = () => {

  const router = useRouter() ;
  

  const handleSubmit =async (e) =>{

  e.preventDefault();
  const name = e.target.name.value ;
   const email = e.target.email.value;
  const password = e.target.password.value;
  const image = e.target.photo.value ;

  // console.log({name , email , password , image})

  const { data, error } = await authClient.signUp.email({

    name,
    email,
    password,
    image

  })

  console.log({data , error})

  if(data){

    toast.success("Sign Up Successful!"); 
    router.push('/login');
 }

  if(error){
toast.error(error.message);  }

  }


    const handleSignUp = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-orange-500 to-orange-300">
        <div className="bg-white p-6 rounded-2xl shadow-xl w-96">
          <h2 className="text-2xl font-bold text-center mb-4 text-orange-500">
            Create Account 🌞
          </h2>

          <form className="space-y-3" onSubmit={handleSubmit}>

                <div>
              <label className="text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                required
                className="w-full p-3 border rounded-lg focus:outline-orange-400"
              />
            </div>

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

            <div>
              <label className="text-sm font-medium">Photo URL</label>
              <input
                type="text"
                name="photo"
                placeholder="Enter photo URL"
                required
                className="w-full p-3 border rounded-lg focus:outline-orange-400"
              />
            </div>

            <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
              Register
            </button>
          </form>

           <div className='text-center my-4 text-md'>
                                 <Link  href={'/login'}>Already have an account? <span className='text-blue-500'>Login</span> </Link>
                               </div>

          <div className="text-center text-gray-500">OR</div>

          <button
          onClick={handleSignUp}
            className="w-full mt-4 border py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100"
          >
            <FcGoogle />
            Sign up with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;