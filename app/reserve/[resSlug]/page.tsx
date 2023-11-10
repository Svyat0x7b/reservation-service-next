import React from 'react';
import Navbar from '@/components/Navbar';
import Header from '@/components/Reservation/Header';
import ReservForm from '@/components/ReservForm';

const ReservationPage: React.FC = () => {
    return (
        <main className="bg-gray-100 min-h-screen w-screen text-black">
            <main className="max-w-screen-2xl m-auto bg-white">
                <Navbar />
                <div className="border-t h-screen">
                    <div className="py-9 w-3/5 m-auto">
                        <Header />
                        <ReservForm />
                    </div>
                </div>
            </main>
        </main>
    );
};

export default ReservationPage;
