import React from 'react'
import SearchBar from './SearchBar'
import Card from './Card'
import Trending from './Trending'

function Blogs() {
  return (
    <div className='mt-16 p-4 grid grid-cols-4 gap-4 justify-center'>
      {/* Left Column - 60% */}
      <div className='col-span-3 w-full'>
        <div className='bg-white'>
          <SearchBar />
        </div>

        <div className='mt-4'>
          <h2 className='font-sans text-lg font-semibold'>Articles</h2>
        </div>

        <div className='mt-4 h-auto overflow-y-auto'>
          {Array.from({ length: 3 }).map((blog, index) => (
            <div key={index}>
              <Card />
            </div>
          ))}
        </div>
      </div>

      <div className='col-span-1'>
        <Trending />
      </div>
    </div>

  )
}

export default Blogs