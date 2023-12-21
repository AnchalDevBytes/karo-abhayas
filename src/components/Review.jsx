import React from 'react'
import ReviewCard from './ReviewCard';

const Review = () => {

    const items = [];
    for(let i = 0; i< 6; i++){
        items.push(<ReviewCard itentity={i}/>)
    }

  return (
    <div className="flex flex-col gap-10 ">
      <h2 className="text-base font-thin text-center">Review</h2>
      <div className="flex gap-8 md:gap-[68px] flex-col items-center md:flex-row md:flex-wrap ">
        {
            items.map((card, index) => (
                <div key={index}>{card}</div>
            ))
        }
      </div>
    </div>
  )
}

export default Review