import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className='flex justify-center items-center min-h-[70vh] font-bold
    '>
      <div className='flex flex-col items-center gap-2'>
      <h2 className='text-3xl'>Contact Page</h2>
      <h5 className='text-xl text-center'>As assigned on internshala, <span className='text-red-400'>Minimum 2 Screens</span> we had to create. <br/> So, Products, Cart & Home page is developed for now. </h5>
      <p className='max-w-sm mx-auto text-center mt-10'> we are also working on other screens as shown in Figma and we'll keep on pushing it on <Link to='https://github.com/anchalraj31082004/karo-abhayas' className="text-sky-600 animate-pulse transition-all">Github</Link>, till then we are providing the assignment before deadline, and hope to connect you for further interview</p>
      <p className='text-red-400 text-sm font-medium max-w-sm mx-auto text-center mt-10'>I am using <Link to='https://fakestoreapi.com' className='text-sky-500'>fakeStoreApi</Link>for this project, as I had to immitate the state management for Cart page instead of data from NEET coaching center. Kindly consider this while evaluation.</p>
      </div>
    </div>
  )
}

export default Contact