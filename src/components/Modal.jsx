'use client'
import React from 'react';

const EditProfileModalUI = ({ onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/40 backdrop-blur-sm">

            {/* Modal Card */}
            <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 sm:p-8 relative">

                {/* Close Icon */}
                <button  onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl">
                    ✕
                </button>

                {/* Title */}
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 text-center mb-6">
                    Edit Profile
                </h2>

                {/* Form */}
                <form className="space-y-4">

                    {/* Name Field */}
                    <div>
                        <label className="text-sm text-gray-600">Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full mt-1 px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none text-sm sm:text-base"
                        />
                    </div>

                    {/* Image Field */}
                    <div>
                        <label className="text-sm text-gray-600">Image URL</label>
                        <input
                            type="text"
                            placeholder="Enter image URL"
                            className="w-full mt-1 px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none text-sm sm:text-base"
                        />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">

                        <button  onClick={onClose}
                            type="button"
                            className="w-full py-2.5 rounded-xl border border-gray-300 text-gray-600 hover:bg-gray-100 transition text-sm sm:text-base"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="w-full py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold transition text-sm sm:text-base"
                        >
                            Save Changes
                        </button>

                    </div>

                </form>
            </div>
        </div>
    );
};

export default EditProfileModalUI;