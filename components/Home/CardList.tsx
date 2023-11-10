import React from 'react';
import Card from './Card';

const CardList: React.FC = () => {
    return (
        <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
};

export default CardList;
