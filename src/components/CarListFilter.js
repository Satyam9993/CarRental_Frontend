import React from 'react'

const CarListFilter = () => {
    return (
        <div className='mt-6 mb-4'>
            <div className="p-4 w-1/2 mx-auto">
                <div>
                    <input
                        type="search"
                        id="search-dropdown"
                        className="block p-2.5 w-full z-20 text-sm rounded-lg border border-gray-500"
                        placeholder="Search Cars..."
                        // value={searchTerm}
                        // onChange={(e) => handleSearch(e.target.value)}
                        // onClick={() => setIsSearching(!isSearching)}
                    />
                    <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-[#fa5c43]">
                        <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        <span className="sr-only">Search</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CarListFilter