import React from 'react';
import SearchBar from '../SearchBar';

const Header: React.FC = () => {
    return (
        <div className="bg-gradient-to-r to-[#5f6984] from-[#0f1f47] p-2">
            <SearchBar />
        </div>
    );
};

export default Header;
