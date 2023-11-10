import React from 'react';
import Navbar from '@/components/Navbar';
import RestaurantNav from '@/components/Restaurant/RestaurantNav';
import Header from '@/components/Restaurant/Header';
import ImagesList from '@/components/Restaurant/ImagesList';
import ReservWindow from '@/components/Restaurant/ReservWindow';
import ReviewList from '@/components/Restaurant/ReviewList';
import Description from '@/components/Restaurant/Description';

const RestaurantDetailPage: React.FC = () => {
    return (
        <main className="bg-gray-100 min-h-screen w-screen text-black">
            <main className="max-w-screen-2xl m-auto bg-white">
                <Navbar />
                <Header />
                <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
                    <div className="bg-white w-[70%] rounded p-3 shadow">
                        <RestaurantNav />
                        <Description />
                        <ImagesList />
                        <ReviewList />
                    </div>
                    <ReservWindow />
                </div>
            </main>
        </main>
    );
};

export default RestaurantDetailPage;
