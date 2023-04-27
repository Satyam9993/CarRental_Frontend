import React, { useState } from 'react';

const SearchCity = () => {
    let data = [
    { name: "Indore"}, 
    { name: "Dewas" }, 
    { name: "Bhopal"},
    { name: "Pune"}, 
    { name: "Jhansi" }, 
    { name: "Kanpur"},
    ]

    const [searchTerm, setSearchTerm] = useState("");
    const [searchItem, setSearchItem] = useState()
    const [filteredData, setFilteredData] = useState(data.slice(0, 4));
    const [isSearching, setIsSearching] = useState(false);

    function handleSearch(term) {
        setSearchTerm(term);
        const newFilteredData = data.filter((item) =>
            item.name.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredData(newFilteredData.slice(0, 4));
    }

    const handleSelect=(item)=>{
        setSearchTerm(item.name)
        setSearchItem(item)
        setIsSearching(false)
    }

    return (
        <div className="mt-10 flex items-center justify-center gap-x-6">
            <div className="relative w-full">
                <div>
                    <input
                        type="search"
                        id="search-dropdown"
                        className="block p-2.5 w-full z-20 text-sm rounded-lg border-[#fa5c43] border focus:ring-[#fa5c43] focus:border-[#fa5c43]"
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
                            <li key={item.name}>
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
