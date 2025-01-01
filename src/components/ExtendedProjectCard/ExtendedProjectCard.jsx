import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import presentation from '/presentation.svg';
import './ExtendedProjectCard.css'
export default function ExtendedProjectCard({name, img, description, tags, repoLink, presentationLink, projectLink}) {
  return (
    <div className='extendedProjectCard w-full h-[250px] flex mb-11'>
        <img src={img} alt="project image" className='w-[40%]' />
        <div className="infoContainer w-[58%] ml-[2%]">
            <div className="projectNameCon w-full flex items-center">
                <h3 className='text-customWhite text-3xl font-medium'>{name}</h3>
                <div className="separatingLine w-[2px] h-[25px] rounded-sm bg-customPurple mx-5"></div>
                <div className="projectLinks flex">
                <a 
                    href={repoLink} 
                    className='mr-5 presentationIcon' 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon 
                        icon={faGithub} 
                        size="2x" 
                        className="text-customPurple" 
                    />
                </a>
                {presentationLink && (
                    <a 
                        href={presentationLink} 
                        className='mr-5' 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <img 
                            src={presentation} 
                            alt="presentation icon" 
                            className="presentationIcon hover:scale-110 transition-transform duration-300" 
                        />
                    </a>
                )}
                {projectLink && (
                    <a 
                        href={projectLink} 
                        className='mr-5 presentationIcon' 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon 
                            icon={faPaperclip} 
                            size="2x" 
                            className="text-customPurple" 
                        />
                    </a>
                )}
                </div>
            </div>
            <p className="projectDesctiption w-[90%] max-h-28 text-customWhite font-light text-sm mt-3">{description}</p>
            <div className="tagsContainer w-[90%] flex flex-wrap max-h-24">
                {tags.map((tag, index) => (
                    <p key={index} className="tag text-customWhite font-light text-sm p-3 bg-customBgPurple flex items-center justify-center rounded-2xl cursor-pointer mt-4 mr-4 hover:bg-customPurple transition-all duration-300">#{tag}</p>
                ))}
            </div>
        </div>
    </div>
  )
}
