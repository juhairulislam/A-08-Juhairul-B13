'use client'
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { toast } from 'react-toastify';
import { useState } from 'react';

const EditProfileModalUI = ({ onClose }) => {

    const handleModalSubmit = async (e) => {

        e.preventDefault();

        const name = e.target.name.value;
        const image = e.target.image.value;

         try {
        await authClient.updateUser({ name, image });

        onClose(); 
    } catch (error) {
        console.error(error);
        toast.error("Update failed!");
    }

    }


    const [imageUrl, setImageUrl] = useState('');
const [error, setError] = useState(false);


const handleImageChange = (e) => {
    const value = e.target.value;
    setImageUrl(value);

    const isValid = /\.(jpg|jpeg|png|webp|avif)$/i.test(value);

    if (value && !isValid) {
        setError(true);
    } else {
        setError(false);
    }
};

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/40 backdrop-blur-sm">

            <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 sm:p-8 relative">

                <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl">
                    ✕
                </button>

                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 text-center mb-6">
                    Edit Profile
                </h2>

                <form onSubmit={handleModalSubmit} className="space-y-4">

                    <div>
                        <label className="text-sm text-gray-600">Name</label>
                        <input
                        required
                            name='name'
                            type="text"
                            placeholder="Enter your name"
                            className="w-full mt-1 px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none text-sm sm:text-base"
                        />
                    </div>

                  <div>
    <label className="text-sm text-gray-600">Image URL</label>
    <input
    required
        name='image'
        type="text"
        value={imageUrl}
        onChange={handleImageChange}
        placeholder="e.g., https://example.com/photo.png"
        className={`w-full mt-1 px-4 py-2.5 rounded-xl border outline-none text-sm sm:text-base transition-all ${
            error 
            ? "border-red-500 focus:ring-2 focus:ring-red-400" 
            : "border-gray-300 focus:ring-2 focus:ring-orange-400"
        }`}
    />
    {error && (
        <p className="text-red-500 text-xs mt-1 ml-1">
            Please provide a valid image path (ending in .png, .jpg, or .jpeg)
        </p>
    )}
</div>

                    <div className="flex gap-3 pt-4">

                        <button onClick={onClose}
                            type="button"
                            className="w-full py-2.5 rounded-xl border border-gray-300 text-gray-600 hover:bg-gray-100 transition text-sm sm:text-base"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="w-full py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold transition text-sm sm:text-base"
                        >
                            Update 
                        </button>

                    </div>

                </form>
            </div>
        </div>
    );
};

export default EditProfileModalUI;