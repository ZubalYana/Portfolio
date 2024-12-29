import React from 'react'
import sheret from '/sheret.png'
export default function ProjectCard() {
  return (
    <div className='projectCard w-[360px] h-[220px] rounded-2xl relative'>
        <img src={sheret} alt="project img" className='projectImg w-full h-full object-cover object-center absolute z-0 rounded-2xl'/>
        <div className="projectImgOverlay w-full h-full bg-cardsOverlay absolute z-10 flex justify-center items-center rounded-2xl">
           <div className="projectCard_title font-medium text-4xl text-customWhite z-20">SHERET</div>
        </div>
    </div>
  )
}
