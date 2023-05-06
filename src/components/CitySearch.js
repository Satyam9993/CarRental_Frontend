import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedLocation } from '../reducer/user';

const SearchCity = () => {
    const {locations} = useSelector(state => state.user);
    const dispatch = useDispatch();

    const [searchTerm, setSearchTerm] = useState("");
    const [searchItem, setSearchItem] = useState()
    const [filteredData, setFilteredData] = useState(locations.slice(0, 4));
    const [isSearching, setIsSearching] = useState(false);

    const handleSearch=(term)=>{
        setSearchTerm(term);
        const newFilteredData = locations.filter((item) =>
            item.name.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredData(newFilteredData.slice(0, 4));
    }

    const handleSelect=(item)=>{
        setSearchTerm(item.name)
        setSearchItem(item)
        setIsSearching(false)
        dispatch(setSelectedLocation({
            location: item._id
        }));
    }

    return (
        <div className="mt-10 flex items-center justify-center gap-x-6">
            <div className="relative w-full">
                <div>
                    <input
                        type="search"
                        id="search-dropdown"
                        className="block p-2.5 w-full z-20 text-sm rounded-lg  border-gray-500 border focus:ring-gray-500 focus:border-gray-500"
                        placeholder="Search Cities..."
                        value={searchTerm}
                        onChange={(e) => handleSearch(e.target.value)}
                        onClick={()=>setIsSearching(!isSearching)}
                    />
                    <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-[#fa5c43]">
                        <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        <span className="sr-only">Search</span>
                    </button>
                </div>
                <div id="dropdown" className="z-10 absolute">
                    <ul className={`${!isSearching && "hidden"} py-2 text-sm text-gray-700" aria-labelledby="dropdown-button`}>
                        {filteredData.map((item) => (
                            // TODO : replace name with id
                            <li key={item._id}>
                                <button 
                                    type="button" 
                                    className="inline-flex w-full px-4 py-2 hover:bg-gray-200"
                                    onClick={()=>handleSelect(item)}
                                    >
                                    {item.name}
                                </button>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SearchCity;
