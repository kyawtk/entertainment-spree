import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { img_300, noPicture } from '../config/config';
import React from 'react'

const Carousel = ({cast =[]}) => {
  const responsive = {
    0: { items: 3 },
    568: { items: 5 },
    1024: { items: 7 },
};
  const items = cast.map(c =>{
    return <div key={c.id} className="p-1  bg-gray-700 hover:bg-slate-800 rounded-md shadow-sm">
      <img src={c.profile_path ? `${img_300}${c.profile_path}`: noPicture} alt="" />
      <p>{c.name}</p>
    </div>
  })
  return (
    <AliceCarousel
    mouseTracking
    infinite
    disableDotsControls
    disableButtonsControls
    responsive={responsive}
    items={items}
    autoPlay
       
    />
  )
}

export default Carousel