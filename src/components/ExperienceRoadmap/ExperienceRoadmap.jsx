import React from 'react'
import ExperienceStep from '../ExperienceStep'
export default function ExperienceRoadmap() {
    let steps = [
        {
            year: '2022',
            title: 'I began my journey',
            description: 'by learning the basics of HTML and CSS at Creator IT Academy. It was there that I first got a taste of programming and quickly developed a liking for it. At the time, I thought it would just be a hobby. This year I experienced JavaScript as well. My first programing language!'
        },
        {
            year: '2023',
            title: 'I continued my path',
            description: 'with constant learning, diving into the basics of JavaScript and building simple web pages. I also started using GitHub and Loom, and got acquainted with web design. After taking a few web design courses at Creator IT Academy, my design way was set in motion!'
        },
        {
            year: '2024',
            title: 'My experience',
            description: 'grew steadily throughout the year as I completed various projects and faced many challenges along the way. I made valuable connections in the web development sphere, began working with Node.js, and learned a wide range of tools and technologies. Furthermore, I started learning React!'
        },
        {
            year: '2025',
            title: 'See you then!',
            description: 'The coming year will undoubtedly bring me plenty of new experiences and knowledge as I continue to dive deeper into programming. I aim to enhance my coding and design skills, complete many new projects, and possibly explore animation and Photoshop. Who knows what opportunities await?'
        },
    ]
  return (
    <div className='StepsCon mt-4'>
        {steps.map((step, index) => (
          <ExperienceStep 
            key={index} 
            year={step.year} 
            title={step.title} 
            description={step.description} 
          />
        ))}
    </div>

   
  )
}
