import React from 'react';

const Navbar = ({ toggleSidebar }) => {
    return (
        <header className="bg-white shadow-md h-16 flex items-center justify-between px-6 z-10 w-full">
            <div className="flex items-center">
                <button
                    onClick={toggleSidebar}
                    className="text-gray-500 focus:outline-none md:hidden"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            <div className="flex items-center space-x-4">
                <div className="relative">
                    <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 focus:outline-none">
                        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-semibold text-gray-700">
                            AD
                        </div>
                        <span className="hidden md:block font-medium">Admin User</span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
