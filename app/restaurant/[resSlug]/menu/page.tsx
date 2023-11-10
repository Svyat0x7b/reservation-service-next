import React from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import RestaurantNav from '@/components/Restaurant/RestaurantNav';
import Header from '@/components/Restaurant/Header';
import MenuList from '@/components/Restaurant/Menu/MenuList';
const RestaurantDetailMenu: React.FC = () => {
    return (
        <main className="bg-gray-100 min-h-screen w-screen text-black">
            <main className="max-w-screen-2xl m-auto bg-white">
                <Navbar />
                <Header />
                <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
                    <div className="bg-white w-[100%] rounded p-3 shadow">
                        <RestaurantNav />
                        <main className="bg-white mt-5">
                            <div>
                                <MenuList />
                            </div>
                        </main>
                    </div>
                </div>
            </main>
        </main>
    );
};

export default RestaurantDetailMenu;
