import React from 'react'
import sampleImage from '../assets/sampleangular.png'

function Card() {
    return (
        <div>
            <div className='border-b border-t border-gray-300 p-2'>
                <div className='flex items-center gap-2'>

                    <div className='rounded-full border border-gray-400 w-12 h-auto p-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.9} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                    </div>

                    <div className='leading-5'>
                        <h3 className='font-sans font-semibold'>Raj Singh <span className='text-gray-500 text-xs ml-2'>15<sup>th</sup> Aug 2024</span> </h3>
                        <small className='text-gray-500 font-normal'>Senior Software Engineer</small>
                    </div>
                </div>

                <div className='mt-3'>
                    <h2 className='font-sans font-semibold text-xl'>Top 8 Angular Optimization Techniques</h2>

                    <div className='flex gap-3'>
                        <p className='font-sans text-sm text-gray-500 mt-2 text-justify'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, iste vel!
                            Atque libero id eaque, doloremque dolorum illo quia iusto laboriosam dignissimos esse facilis vel impedit tenetur dolorem. In, quae.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, iste vel!
                            Atque libero id eaque, doloremque dolorum illo quia iusto laboriosam dignissimos esse facilis vel impedit tenetur dolorem. In, quae.
                        </p>

                        <img src={sampleImage} alt='blog-image' className='w-64' />
                    </div>

                </div>

                <div className='flex gap-2'>
                    <button className='border border-gray-400 p-3 rounded-full bg-gray-100 border-none'>
                        <p className='text-sm'>UI</p>
                    </button>
                    <button className='border border-gray-400 p-3 rounded-full bg-gray-100 border-none'>
                        <p className='text-sm'>Angular</p>
                    </button>
                    <button className='border border-gray-400 p-3 rounded-full bg-gray-100 border-none'>
                        <p className='text-sm'>Javascript</p>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Card