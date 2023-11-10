import React from 'react';
import Link from 'next/link';

const RestaurantNav: React.FC = () => {
    return (
        <nav className="flex text-reg border-b pb-2">
            <Link href="/restaurant/rs-1" className="mr-7">
                {' '}
                Overview{' '}
            </Link>
            <Link href="/restaurant/rs-1/menu" className="mr-7">
                {' '}
                Menu{' '}
            </Link>
        </nav>
    );
};

export default RestaurantNav;
