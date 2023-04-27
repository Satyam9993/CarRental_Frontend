import React, { useState } from 'react';
import CarCard from './CarCard';

const CarList = () => {
    const products = [
        {
            id: 1,
            name: 'Puma Shoes',
            desc: "The best shoes in the marketplace",
            href: '#',
            imageSrc: "https://unsplash.com/photos/IJjfPInzmdk/download?force=true&w=1920",
            imageAlt: "Puma Shoes",
            price: '$2/hr',
            color: 'Black',
        },
        {
            id: 2,
            name: 'Basic Tee',
            desc: "The best shoes in the marketplace",
            href: '#',
            imageSrc: "https://unsplash.com/photos/IJjfPInzmdk/download?force=true&w=1920",
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
        },
        {
            id: 3,
            name: 'Basic Tee',
            desc: "The best shoes in the marketplace",
            href: '#',
            imageSrc: "https://unsplash.com/photos/IJjfPInzmdk/download?force=true&w=1920",
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
        },
        {
            id: 4,
            name: 'Basic Tee',
            desc: "The best shoes in the marketplace",
            href: '#',
            imageSrc: "https://unsplash.com/photos/IJjfPInzmdk/download?force=true&w=1920",
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
        },
        {
            id: 5,
            name: 'Basic Tee',
            desc: "The best shoes in the marketplace",
            href: '#',
            imageSrc: "https://unsplash.com/photos/IJjfPInzmdk/download?force=true&w=1920",
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
        },
    ]

    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState(products.slice(0, 15));

    const handleSearch=(term)=>{
        setSearchTerm(term);
        const newFilteredData = products.filter((item) =>
            item.name.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredData(newFilteredData.slice(0, 15));
    }

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                {/* Filter Section */}

                <div className='mt-6 mb-4'>
                    <div className="p-4 w-1/2 mx-auto">
                        <div>
                            <input
                                type="search"
                                id="search-dropdown"
                                className="block p-2.5 w-full z-20 text-sm rounded-lg border"
                                placeholder="Search Cars..."
                                value={searchTerm}
                                onChange={(e) => handleSearch(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {filteredData.map((product) => (
                        <CarCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CarList
