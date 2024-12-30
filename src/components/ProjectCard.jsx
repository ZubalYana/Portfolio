import React from 'react';
import sheret from '/projectsImgs/sheret.png';

export default function ProjectCard() {
  return (
    <div className="projectCard w-[360px] h-[220px] rounded-2xl relative group cursor-pointer">
      <img 
        src={sheret} 
        alt="project img" 
        className="projectImg w-full h-full object-cover object-center absolute z-0 rounded-2xl"
      />
      <div className="projectImgOverlay w-full h-full bg-cardsOverlay absolute z-10 flex flex-col justify-center items-center rounded-2xl p-7">
        <div className="projectCard_title font-medium text-4xl text-customWhite text-center">SHERET</div>
        <div className="projectCard_subtitle max-h-0 opacity-0 overflow-hidden group-hover:max-h-[100px] group-hover:opacity-100 transition-all duration-700 font-light text-sm text-customWhite text-center mt-3">Online file-sharing platform designed to make managing your files effortless and hassle-free—no need for physical storage devices.</div>
      </div>
    </div>
  );
}
