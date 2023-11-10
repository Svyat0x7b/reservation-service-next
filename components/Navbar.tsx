import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gradient-to-r from-[#002991] to-[#346afe] p-2 flex justify-between">
            <Link href="/" className="font-bold text-white text-2xl">
                {' '}
                OpenTable{' '}
            </Link>
            <div>
                <div className="flex">
                    <button className="bg-blue-400 text-white border p-1 px-4 rounded mr-3">
                        Sign in
                    </button>
                    <button className="border p-1 px-4 rounded text-blue-400">Sign up</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
