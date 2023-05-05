import React, { useState } from 'react';
import CarCard from './CarCard';
import { useSelector } from 'react-redux';

const CarList = () => {
    const {cars} = useSelector(state => state.user)

    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState(cars.slice(0, 15));

    const handleSearch=(term)=>{
        setSearchTerm(term);
        const newFilteredData = cars.filter((item) =>
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
