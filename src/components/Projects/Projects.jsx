import React from 'react'
import ExtendedProjectCard from '../ExtendedProjectCard/ExtendedProjectCard'
import sheret from '/projectsImgs/sheret.png';
import travelog from '/projectsImgs/travelog.png';
import dental from '/projectsImgs/dental.png';
import honey from '/projectsImgs/honey.png';
import yantarne from '/projectsImgs/yantarne.png';
import yorokobi from '/projectsImgs/yorokobi.png';
export default function Projects() {
  let projects = [
    {
      name: 'SHERET',
      img: sheret,
      description: 'Sheret is an online file-sharing platform designed to make managing your files effortless and hassle-free—no need for physical storage devices. With a sleek, user-friendly interface, my custom design, and incredibly convenient features, Sheret has everything you need. Simply upload your file, receive a unique code, and access your file anytime, anywhere!',
      tags: ['HTML', 'CSS', 'JS', 'Node.js', 'Multer', 'Express', 'Dotenv', 'MongoDB'],
      repoLink: 'https://github.com/ZubalYana/Sheret',
      presentationLink: 'https://www.canva.com/design/DAGWAE-TrWU/PggvoTljiQ5zdtjk9Rzj7A/edit?utm_content=DAGWAE-TrWU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
      projectLink: 'https://sheret.onrender.com/'
    },
  ]
  return (
    <div className="wrap w-full min-h-screen bg-customBlack p-10 flex flex-col items-center">
       {projects.map((project, index) => (
        <ExtendedProjectCard key={index} {...project} /> 
      ))}
    </div>
  )
}
