'use client'
import EditProfileModalUI from '@/components/Modal';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import React, { useState } from 'react';

const MyProfilePage = () => {

    const userData = authClient.useSession();
    const user = userData.data?.user;

    const [openModal, setOpenModal] = useState(false);


    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-orange-500 to-orange-300 px-4">

            <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl p-6 sm:p-8 w-full max-w-md text-center">

                <div className="flex justify-center mb-4">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full ring-4 ring-orange-500 ring-offset-2 overflow-hidden">
                        <Image
                            referrerPolicy="no-referrer"
                            alt={user?.name}
                            src={user?.image }
                            width={96}
                            height={96}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>

                <h2 className="text-lg sm:text-xl font-bold text-gray-800">
                    {user?.name}
                </h2>

                <p className="text-gray-500 text-sm sm:text-base mb-6">
                    {user?.email}
                </p>

                <button onClick={() => setOpenModal(true)} className="w-full bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base">
                    Edit Profile
                </button>

            </div>

            {openModal && (
                <EditProfileModalUI onClose={() => setOpenModal(false)} />
            )}
        </div>
    );
};

export default MyProfilePage;