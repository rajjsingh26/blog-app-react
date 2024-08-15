import React from 'react'

function SearchBar() {
  return (
    <div>
      <div className='border border-gray-300 w-96 h-12 rounded-3xl p-2.5 flex items-center gap-1'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.0} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <input type='text' placeholder='Search...' className='p-1 outline-none w-full' />
      </div>
    </div>
  )
}

export default SearchBar
