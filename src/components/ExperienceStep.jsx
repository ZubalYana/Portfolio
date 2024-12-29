import React from 'react'

export default function ExperienceStep({year, title, description}) {
  return (
    <div>
    <div className="experienceStep w-[770px] h-[152px] flex">
        <div className="year w-[55px] h-[40px] flex items-center text-lg font-medium text-customWhite">{year}</div>
        <div className="path w-[40px] h-full flex flex-col items-center">
            <div className="path_circle w-[40px] h-[40px] rounded-full bg-customPurple"></div>
            <div className="path_stick w-[3px] h-[112px] bg-customPurple"></div>
        </div>
        <div className="experience_text w-[650px] h-full flex flex-col pl-5">
            <div className="experience_title text-3xl font-semibold text-customWhite">{title}</div>
            <div className="experience_description text-sm font-light text-customWhite mt-2">{description}</div>
        </div>
    </div>
</div>
  )
}
