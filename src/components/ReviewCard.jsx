import React from 'react'

const ReviewCard = () => {
  return (
    <div className='md:w-[411px] w-[320px] h-[126px] flex-shrink-0 bg-neutral-100 flex flex-col gap-4 py-3 px-3'>
      <h3 className='text-base font-medium text-black border-b-2 border-stone-300'>Amit Jha</h3>
      <p className='text-black text-sm italic font-thin'>Some review submitted by the user about the Company</p>
    </div>
  )
}

export default ReviewCard