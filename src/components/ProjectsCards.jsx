import React from 'react'
import sheret from '/projectsImgs/sheret.png';
import travelog from '/projectsImgs/travelog.png';
import dental from '/projectsImgs/dental.png';
import honey from '/projectsImgs/honey.png';
import yantarne from '/projectsImgs/yantarne.png';
import yorokobi from '/projectsImgs/yorokobi.png';
export default function ProjectsCards() {
  let projects = [
    {
      name: 'SHERET',
      description: 'Online file-sharing platform designed to make managing your files effortless and hassle-free—no need for physical storage devices.',
      img: sheret
    },
    {
        name: 'Travelog',
        description: 'A vibrant travel blog that lets you share your adventures and inspire others! Discover new destinations, get travel tips, connect with fellow travelers, and enjoy the community.',
        img: travelog
    },
    {
        name: 'DENTAL',
        description: 'This webpage is for a dental clinic and offers a range of functions with a user-friendly experience. It was my first major React project.',
        img: dental
    },
    {
        name: 'Honey',
        description: 'A static web page I created to learn and practice the Tailwind CSS framework. Through this project, I gained valuable experience, and the page looks great!',
        img: honey
    },
    {
        name: 'Yantarne',
        description: 'A team project I participated in, where I was responsible for the first screen and sound functionality. During this project, we learned how to use APIs in React.',
        img: yantarne
    },
    {
        name: 'Yorokobi',
        description: 'This project was born out of my imagination and love for Japanese culture and cuisine. I had a lot of fun experimenting with animations!',
        img: yorokobi
    },
  ]
  return (
    <div className='projectsContainer flex flex-wrap justify-between w-[1120px] mt-7'>
      {projects.map((project, index) => (
            <div className="projectCard w-[360px] h-[200px] rounded-2xl relative group cursor-pointer mb-5" key={index}>
            <img 
              src={project.img} 
              alt="project img" 
              className="projectImg w-full h-full object-cover object-center absolute z-0 rounded-2xl"
            />
            <div className="projectImgOverlay w-full h-full bg-cardsOverlay absolute z-10 flex flex-col justify-center items-center rounded-2xl p-7">
              <div className="projectCard_title font-medium text-4xl text-customWhite text-center">{project.name}</div>
              <div className="projectCard_subtitle max-h-0 opacity-0 overflow-hidden group-hover:max-h-[100px] group-hover:opacity-100 transition-all duration-700 font-light text-sm text-customWhite text-center mt-3">{project.description}</div>
            </div>
          </div>
      ))}
    </div>
  )
}
