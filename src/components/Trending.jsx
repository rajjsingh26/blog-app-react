import React from 'react'
import Card from './Card'

function Trending() {

  const readingList = [
    {
      id: 1,
      title: "A Beginner's Guide to White Balance in Photography",
      author: 'Irene Au',
      date: 'Apr 19, 2022',
      image: 'https://images.news18.com/ibnlive/uploads/2021/08/sun-photo-16293134144x3.jpg?impolicy=website&width=640&height=480', // Replace with actual image URL
    },
    {
      id: 2,
      title: "Mastering the Art of UX Design",
      author: 'John Doe',
      date: 'Mar 10, 2024',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLn1WqE4mGGJuRpy7KrxgEkgS5p682eow6sA&s', // Replace with actual image URL
    },
    {
      id: 3,
      title: "Mastering React",
      author: 'Lorem Doe',
      date: 'jan 21, 2023',
      image: 'https://miro.medium.com/v2/resize:fit:1400/1*x0d41ns8PTQZz4a3VbMrBg.png', // Replace with actual image URL
    },
  ];



  return (
    <div className="p-6 bg-white rounded-lg fixed">
      <h2 className="text-xl font-semibold mb-4">People You Might Be Interested In</h2>

      <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-2'>

          <div className='rounded-full border border-gray-400 w-12 h-auto p-3'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.9} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
          </div>

          <div className='leading-5'>
            <h3 className='font-sans font-semibold'>Raj Singh</h3>
            <small className='text-gray-500 font-normal'>Senior Software Engineer @Meta</small>
          </div>

          <button className='border border-gray-300 p-2 rounded-full ml-8'>
            <p className='text-sm'>Follow</p>
          </button>

        </div>

        <div className='flex items-center gap-2'>

          <div className='rounded-full border border-gray-400 w-12 h-auto p-3'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.9} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
          </div>

          <div className='leading-5'>
            <h3 className='font-sans font-semibold'>Rinky Singh</h3>
            <small className='text-gray-500 font-normal'>Lead Software Engineer @Google</small>
          </div>

          <button className='border border-gray-300 p-2 rounded-full ml-8'>
            <p className='text-sm'>Follow</p>
          </button>

        </div>
      </div>

      <div className="bg-white p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-3">My reading list</h3>
        <ul>
          {readingList.map((item) => (
            <li key={item.id} className="flex mb-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 rounded-md object-cover mr-4"
              />
              <div>
                <p className="text-sm font-medium">{item.title}</p>
                <p className="text-xs text-gray-500">
                  {item.author} • {item.date}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto max-w-7xl px-1 py-1 lg:px-0">
        <div className="flex flex-col items-center">
          <div className="w-full">
            <h2 className="text-3xl font-bold text-black text-center">Subscribe to our newsletter</h2>
            <p className="mt-2 text-gray-600 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aliquam at ipsum eu nunc Aliquam at ipsum eu nunc
              Aliquam at ipsum eu nunc
            </p>
          </div>
          <div className="mt-5 w-full">
            <form className="flex justify-center">
              <div className="flex w-full max-w-md items-center space-x-2">
                <input
                  className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Email"
                />
                <button
                  type="button"
                  className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trending