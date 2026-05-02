'use client'
import Link from 'next/link';
import React from 'react';
import NavLink from './NavLink';
import Image from 'next/image';
import { authClient } from '@/lib/auth-client';
import { usePathname } from 'next/navigation';
// import logo from '/logo.png'

const Navbar = () => {


    
    
    
    
    const userData = authClient.useSession();
    
    const user = userData.data?.user;
    
    const pathname = usePathname();
    const isLoginPage = pathname === '/login';



    const handleSignOut =async () =>{

await authClient.signOut() ;
    }

    return (
        <div className='z-50'>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start px-4">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <NavLink href={'/'}>Home</NavLink>
                            <NavLink href={'/products'}>Products</NavLink>
                            <NavLink href={'/my-profile'}>My Profile</NavLink>      </ul>
                    </div>
                    <Image
                        src='/logo.png'
                        alt='SunCart Logo'
                        width={75}
                        height={75}
                    >

                    </Image>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-4 text-md font-medium ">

                        <NavLink href={'/'}>Home</NavLink>
                        <NavLink href={'/products'}>Products</NavLink>
                        <NavLink href={'/my-profile'}>My Profile</NavLink>
                    </ul>
                </div>
                {(!user && isLoginPage) && <div className="navbar-end flex gap-2">
                    <Link className='btn bg-orange-400 text-white' href={'/signup'}>Sign Up</Link>
                    <Link className='btn bg-orange-400 text-white' href={'/login'}>Login</Link>
                </div>}

                {(user && !isLoginPage) &&

                    <div className="navbar-end flex gap-2">
                        <div className="avatar">
                            <div className="ring-orange-500 ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2 ">
                                <Image referrerPolicy="no-referrer" alt={user?.name} src={user?.image} width={50} height={50}/>
                            </div>
                        </div>

                        <button onClick={handleSignOut} className='btn bg-orange-400 text-white'>Logout</button>
                    </div>

                }
            </div>
        </div>
    );
};

export default Navbar;