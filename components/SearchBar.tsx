'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchBar: React.FC = () => {
    const [inputLocation, setInputLocation] = useState('');
    const [isLengthError, setIsLengthError] = useState(false);
    const router = useRouter();
    const searchHandler = () => {
        if (inputLocation.trim().length <= 2) {
            setIsLengthError(true);
            return;
        }
        router.push('/search');
    };
    return (
        <div className="text-left text-lg py-3 m-auto flex justify-center text-black">
            <div>
                <input
                    className="rounded  mr-3 p-2 w-[450px] outline-none"
                    type="text"
                    placeholder="State, city or town"
                    value={inputLocation}
                    onChange={(e) => setInputLocation(e.target.value)}
                />
                {isLengthError && (
                    <p className="text-red-500 font-light text-xs">
                        The search must contain 3 or more symbols
                    </p>
                )}
            </div>
            <button onClick={searchHandler} className="rounded bg-red-600 px-9 py-2 text-white">
                Search
            </button>
        </div>
    );
};

export default SearchBar;
