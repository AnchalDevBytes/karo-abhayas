import React from 'react'
import { Carousel, NotificationForAmit, Review, TopStudent} from '../components'
import {images} from "../utils/Images"

const HomePage = () => {


  return (
    <div className='md:px-9 pb-8 md:py-8 flex flex-col gap-7'>
      <NotificationForAmit/>
      <Carousel images={images}/>
      <TopStudent/>
      <Review/>
    </div>
  )
}

export default HomePage